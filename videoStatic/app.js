function videoTest() {
    const button = document.getElementById('button');
    fetch(`http://localhost:3000/video?number=${button.value}`, {
        method: 'get'
    })
    .then(res => res.json())
    .then(body => videoNext(body, button))
    .catch(err => console.error(err));
};

function videoNext(path, button) {
    button.value == 0 ? button.value = 1 : button.value = 0;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', path.path);
    xhr.responseType = 'arraybuffer';

    xhr.onload = (e) => {
        const blob = new Blob([xhr.response]);
        const url = URL.createObjectURL(blob);

        const img = document.getElementById('video');
        img.src = url;
    };

    xhr.send();
};

function onload() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './video.mp4');
    xhr.responseType = 'arraybuffer';

    xhr.onload = (e) => {
        const blob = new Blob([xhr.response]);
        const url = URL.createObjectURL(blob);

        const img = document.getElementById('video');
        img.src = url;
    };

    xhr.send();
};

function test() {
    const button = document.getElementById('button');
    if (button.value == 1) {
        button.value = 2;
        const xhr = new XMLHttpRequest();

        xhr.open('GET', './video2.mp4');
        xhr.responseType = 'arraybuffer';

        xhr.onload = (e) => {
            const blob = new Blob([xhr.response]);
            const url = URL.createObjectURL(blob);

            const img = document.getElementById('video');
            img.src = url;
        };

        xhr.send();
    } else {
        button.value = 1;
        const xhr = new XMLHttpRequest();

        xhr.open('GET', './video.mp4');
        xhr.responseType = 'arraybuffer';

        xhr.onload = (e) => {
            const blob = new Blob([xhr.response]);
            const url = URL.createObjectURL(blob);

            const img = document.getElementById('video');
            img.src = url;
            console.log(xhr);
        };

        xhr.send();
    };
};