const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const BaseUrl = 'https://api.giftedtech.my.id';
const giftedapikey = 'gifted';

zokou({
  nomCom: "play",
  categorie: "Download",
  reaction: "💿"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*POPKID-MD SONG PLAYER*\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* mp3 (320kbps)
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
│ *_𝗥𝗲𝗴𝗮𝗿𝗱𝘀 POPKID TECH🌟._*
╰─────────────────◆`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });
     
       repondre('*Popkid md has just downloaded your song*...');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.' + error);
  }
});

zokou({
  nomCom: "song",
  categorie: "Download",
  reaction: "💿"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*POPKID-MD SONG PLAYER*\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* mp3 (320kbps)
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}
╭────────────────◆
│ *_𝗥𝗲𝗴𝗮𝗿𝗱𝘀 POPKID✅._*
╰─────────────────◆`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          document: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });
       
        repondre('*Popkid md has just downloaded your song*...');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.' + error);
  }
});


zokou({
  nomCom: "video",
  categorie: "Download",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*POPKID-MD VIDEO PLAYER*\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* 720p-HD
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}
╭────────────────◆
│ *_𝗥𝗲𝗴𝗮𝗿𝗱𝘀 POPKID._*
╰─────────────────◆`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
      caption: "*𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃*",
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre('*Popkid md has just downloaded your video*...');
      } else {
        repondre('Failed to download the video. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.' + error);
  }
});

zokou({
  nomCom: "videodoc",
  categorie: "Download",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*CHARITY-MD VIDEO PLAYER*\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* 720p-HD
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆

⦿ *Direct YtLink:* ${videoUrl}
╭────────────────◆
│ *_𝗥𝗲𝗴𝗮𝗿𝗱𝘀 𝗖̼𝗔̼𝗦̼𝗘̼𝗬̼𝗥̼𝗛̼𝗢̼𝗗̼𝗘̼𝗦̼🌟 ._*
╰─────────────────◆`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          document: { url: videoDlUrl },
               caption: "*𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐂𝐇𝐀𝐑𝐈𝐓𝐘*",
          mimetype: 'video/mp4'
        }, { quoted: ms });
 
       repondre('*Charity md has just downloaded your video*...');
      } else {
        repondre('Failed to download the video. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.' + error);
  }
});
