
// ฟังก์ชันสำหรับแสดง/ซ่อน input URL ตาม radio button ที่เลือก
function toggleImageSource() {
    const useDefaultImage =
        document.getElementById('useDefaultImage').checked;
    document.getElementById('defaultImageContainer').style.display =
        useDefaultImage ? 'block' : 'none';
    document.getElementById('customURLContainer').style.display =
        useDefaultImage ? 'none' : 'block';
}

// เรียกใช้ฟังก์ชัน toggleImageSource() ตอนเริ่มต้น
toggleImageSource();

// เพิ่ม event listener ให้กับ radio button เพื่อเรียกใช้ toggleImageSource()
const imageSourceRadios = document.querySelectorAll(
    'input[name="imageSource"]'
);
imageSourceRadios.forEach((radio) => {
    radio.addEventListener('change', toggleImageSource);
});

async function shareMsg() {
    // ดึงข้อความจาก textarea
    console.log('shareMsg');
    const freeText = document.getElementById('freeText').value;
    const headText = document.getElementById('headText').value;

    // ดึง URL รูปภาพ
    let imageUrl;
    if (document.getElementById('useDefaultImage').checked) {
        const selectedImage = document.querySelector(
            '#defaultImageContainer input[name="picture"]:checked'
        );
        imageUrl = selectedImage
            ? selectedImage.value
            : 'https://via.placeholder.com/150'; // default image URL
    } else {
        imageUrl = document.getElementById('urlPic').value;
    }

    // ดึงข้อมูล profile ของผู้ใช้
    const profile = await liff.getProfile();

    // สร้าง Flex Message
    const flexMessage3 = {
        type: 'flex',
        altText: `สุขสันต์วันปีใหม่ 2025 นะ โดย ${profile.displayName}`,
        contents: {
            type: 'bubble',
            size: 'giga',
            header: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://phoomdev.github.io/tyt-hny2025/images/tyt-logo.png",
                        align: "center",
                        position: "absolute"
                    }
                ],
                paddingAll: "20px",
                backgroundColor: "#ffffff",
                spacing: "md",
                height: "10px",
                paddingTop: "22px",
                alignItems: "center",
                justifyContent: "center",
                action: {
                    type: "uri",
                    label: "action",
                    uri: "https://www.toyotayasothorn.com/"
                }
            },
            hero: {
                type: 'image',
                url: imageUrl, // ใช้ imageUrl ที่ดึงมาจาก input
                aspectRatio: '1.5:1',
                aspectMode: 'cover',
                size: 'full',
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: headText,
                        weight: 'bold',
                        size: 'xl',
                        color: "#007bff",
                        align: 'center',
                    },
                    {
                        type: 'box',
                        layout: 'baseline',
                        margin: 'md',
                        contents: [
                            {
                                type: 'icon',
                                size: 'sm',
                                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                                type: 'text',
                                text: '2025 ',
                                size: 'sm',
                                color: '#999999',
                                margin: 'md',
                                flex: 0,
                                align: 'center',
                            },
                            {
                                type: 'icon',
                                size: 'sm',
                                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                        ],
                        spacing: 'md',
                        justifyContent: 'center',
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        margin: 'lg',
                        contents: [
                            {
                                type: 'text',
                                wrap: true,
                                color: '#555555',
                                size: 'sm',
                                flex: 5,
                                text: freeText, // ใช้ freeText ที่ดึงมาจาก textarea
                                align: 'center',
                            },
                            {
                                type: 'box',
                                layout: 'baseline',
                                spacing: 'sm',
                                contents: [
                                    {
                                        type: 'text',
                                        text: 'โดย',
                                        color: '#aaaaaa',
                                        size: 'sm',
                                        flex: 1,
                                    },
                                    {
                                        type: 'text',
                                        text: profile.displayName, // ใช้ displayName จาก profile
                                        wrap: true,
                                        color: '#007bff',
                                        size: 'sm',
                                        flex: 3,
                                    },
                                ],
                                alignItems: "center",
                                justifyContent: "center"
                            },
                        ],
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "image",
                                url: profile.pictureUrl, // ใช้ pictureUrl จาก profile
                                animated: false,
                                size: "lg",
                                aspectMode: "cover"
                            }
                        ],
                        cornerRadius: "sm",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                ],
                alignItems: 'center',
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "separator"
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "button",
                                action: {
                                    type: "uri",
                                    label: "เขียนการ์ดอวยพรให้เพื่อน",
                                    uri: 'https://liff.line.me/2006729904-o7RYbjdg',
                                },
                                style: "primary",
                                color: "#007bff",
                                height: "sm"
                            }
                        ],
                        paddingAll: "sm"
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "โตโยต้ายโสธร",
                                color: "#aaaaaa",
                                size: "sm"
                            },
                            {
                                type: "text",
                                text: "ยึดมั่น คุณธรรม | ทันสมัย | ได้มาตรฐานสากล",
                                size: "xs",
                                color: "#aaaaaa"
                            }
                        ],
                        alignItems: "center"
                    }
                ],
                spacing: 'sm',
            },
        },
    };

    // แปลง Flex Message เป็น JSON string
    const flexMessageJson = JSON.stringify(flexMessage3, null, 2); //  null, 2  ใช้สำหรับ format JSON ให้อ่านง่าย

    // แสดงผล JSON string ใน element ที่มี id="flexMessageJson"
    //document.getElementById("flexMessageJson").textContent = flexMessageJson;
    // แชร์ Flex Message
    try {
        const result = await liff.shareTargetPicker([flexMessage3]);
        if (result) {
            console.log('Message shared successfully:', result);
            alert('ส่งสำเร็จ');
        } else {
            console.log('Sharing canceled.');
            alert('ผู้ใช้ยกเลิกการแชร์ข้อความ');
        }
    } catch (err) {
        console.error('Error sharing message:', err.message);
        alert('ไม่สามารถแชร์ข้อความได้: ' + err.message);
    }

}

async function getUserProfile() {
    const profile = await liff.getProfile();
}

async function main() {
    await liff.init({
        liffId: '2006729904-o7RYbjdg', // **อย่าลืมแก้ไข liffId ให้ถูกต้อง**
    });
    if (liff.isLoggedIn()) {
        console.log('Success');
        getUserProfile();
    } else {
        liff.login();
    }
    // enable ปุ่ม
    document.getElementById('shareButton').disabled = false;
}

main();

// เพิ่ม event listener ให้กับปุ่ม
document
    .getElementById('shareButton')
    .addEventListener('click', shareMsg);
