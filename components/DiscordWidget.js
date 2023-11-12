import React, { useEffect, useState } from 'react';

const DiscordWidget = () => {
  const serverId = '971201160549658664'; // Discord server ID
  const widgetUrl = `https://discord.com/widget?id=${serverId}&theme=dark`;
  const apiUrl = `https://discord.com/api/guilds/${serverId}/widget.json`;

  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setServerInfo(data))
      .catch(error => console.error('Error fetching Discord data:', error));
  }, []);

  return (
    <div>
      <iframe 
        src={widgetUrl} 
        width="350" 
        height="500" 
        allowTransparency="true" 
        frameBorder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
      </iframe>
      {/* Render server information here */}
      {serverInfo && <div>{/* Display server information */}</div>}
    </div>
  );
};

export default DiscordWidget;
