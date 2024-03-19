fetch(`https://api.soundcloud.com/connect`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => { console.error('Error:', error); });