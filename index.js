import { google } from 'googleapis';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const videoId = process.argv[2] || 'dQw4w9WgXcQ';

async function fetchTranscript() {
  try {
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/youtube.readonly']
    });
    const authClient = await auth.getClient();
    const youtube = google.youtube({ version: 'v3', auth: authClient });

    const listRes = await youtube.captions.list({
      part: ['id'],
      videoId
    });

    const caption = listRes.data.items?.[0];
    if (!caption) {
      console.log('No captions available for this video.');
      return;
    }

    const downloadRes = await youtube.captions.download(
      { id: caption.id, tfmt: 'srt' },
      { responseType: 'stream' }
    );

    const dest = fs.createWriteStream(`${videoId}.srt`);
    await new Promise((resolve, reject) => {
      downloadRes.data
        .on('end', resolve)
        .on('error', reject)
        .pipe(dest);
    });

    console.log(`Transcript saved to ${videoId}.srt`);
  } catch (err) {
    console.error('Failed to fetch transcript:', err.message);
  }
}

fetchTranscript();
