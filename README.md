# YouTube API Helper

A helper tool for accessing the YouTube API. This project aims to simplify interactions with the YouTube Data API v3.

## Installation

Clone the repository and install the dependencies.

```bash
git clone <your-repo-url>
cd yt-helper
npm install
```

## Configuration

Create a `.env` file in the root directory and add your YouTube API key:

```
YOUTUBE_API_KEY='Your-API-Key-Here'
```

## Usage

(Provide examples on how to use your tool here.)

### Fetching Video Transcripts

This project uses the official YouTube Data API to download caption tracks when
available. To retrieve a transcript you must authenticate with a Google account
that has permission to access the captions for the given video. Run:

```bash
npm run dev -- <videoId>
```

If captions are found, they will be saved as `<videoId>.srt` in the project
directory.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/) 