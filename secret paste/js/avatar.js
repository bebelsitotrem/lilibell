
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/1169546078274715650"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("lucas").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("lucas");
  document.getElementById("username");
});

'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/717162894521008138"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("power").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("power");
  document.getElementById("username");
});

'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/1048595978468462694"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("anaju").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("power");
  document.getElementById("username");
});

'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/620311029817278469"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("since").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("since");
  document.getElementById("username");
});

'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/946225527163867177"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("revoltz").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("revoltz");
  document.getElementById("username");
});

'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/909380799860707340"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("duarte").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("duarte");
  document.getElementById("username");
});

'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/990324040105336882"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("dima").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("dima");
  document.getElementById("username");
});




