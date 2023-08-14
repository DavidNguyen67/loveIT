let currentTime = new Date().toLocaleTimeString();
document.querySelector('.currentTime').innerText = currentTime;

var config = {
    texts: [
        'Gửi cho bé Khủng Long siêu nghịch =))',
        'Hôm nay là một ngày bình thường 🙂',
        'Hnay t rảnh, với lâu cũng không có gì ngọt ngọt gửi cho m',
        'Nên t đã code ra ( thực ra là copy paste + thêm kiến thức của t )',
        'Để điều chỉnh lại cho phù hợp với hoàn cảnh',
        'Đây là một lời nhắn, được gửi từ hành tinh Love🥰',
        'Thu ơi, nếu m là một vì sao trên bầu trời đêm,',
        'thì t sẽ là mặt trăng để t luôn được bên cạnh m.',
        'Và ngày nào cũng được cắn bé Thu🤭',
        'YAMI~~',
    ],
    title: 'Nguyễn Thị Thu',
    time: currentTime,
};

let index = 0;
const audio = document.querySelector('.audio');
let allMusic = ['music1.mp3', 'music2.mp3'];
audio.src = `static/audio/${allMusic[0]}`;
audio.addEventListener('ended', function () {
    if (index === 0) {
        index = 1;
    } else {
        index = 0;
    }
    audio.src = `static/audio/${allMusic[index]}`;
    setTimeout(() => {
        audio.play();
    }, 1200);
});

document.querySelector('.button').onclick = () => {
    if (!audio.classList.contains('playing')) {
        audio.classList.add('playing');
        audio.volume = 0.5;
        audio.play();
        document.querySelector('.button').innerText = 'playing';
    } else {
        audio.classList.remove('playing');
        audio.pause();
        document.querySelector('.button').innerText = 'paused';
    }
};
