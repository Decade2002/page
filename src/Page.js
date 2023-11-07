import React from "react";

const Page = () => {
    var jsonObject = [
    {
        name: 'phone-call',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/phone-call.svg',
        aRef : 'tel:0913282578'
    },
    {
        name: 'gmail',
        imgRef: 'https://icons8.com/icon/P7UIlhbpWzZm/gmail',
        aRef: 'mailto:ducnhat78@gmail.com'
    },
    {
        name: 'QR',
        imgRef: 'https://w.ladicdn.com/s450x450/629a0b2bb9cb4f0020e11d7d/chart-20231018104407-g05ls.png',
        aRef: ''
    },
    {
        name: 'telegram',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/telegram.svg',
        aRef: ''
    },
    {
        name: 'line',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/line.svg',
        aRef: 'https://line.me/ti/p/xES1Ir6p4g'
    },
    {
        name: 'zalo',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/zalo.svg',
        aRef: 'http://zalo.me/3014522917786023659?src=qr'
    },
    {
        name: 'facebook',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/facebook.svg',
        aRef: 'https://www.facebook.com/ctylawholdings'
    },
    {
        name: 'youtube',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/youtube.svg',
        aRef: 'https://www.youtube.com/@LawHoldings'
    },
    {
        name: 'tiktok',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/tiktok.svg',
        aRef: ''
    },
    {
        name: 'wechat',
        imgRef: 'https://w.ladicdn.com/ladiui/icons/social/wechat.svg',
        aRef: ''
    },
    {
        name: 'money?',
        imgRef: 'https://icons8.com/icon/112601/dollar-coin',
        aRef: ''
    }
    ]
    return(
        <div className="lady-wraper" style={{width: '420px', paddingTop: '62px', marginLeft: '550px'}}>
            <div className="fixed-top" style={{width: '420px', zIndex: '9000', height: '62.171px', marginLeft: '550px', backgroundColor: 'white'}}>
                <img src="https://w.ladicdn.com/s550x350/629a0b2bb9cb4f0020e11d7d/frame-2-20230907050412-nfxao.png" style={{width: '204.857px', height: '42.171px', marginLeft: '100px'}}></img>
            </div>
            <div style={{height: '697.99px', width: '420px', position: 'relative'}}>
                <video src="https://s.ladicdn.com/5dccb67118ed7f6153f61977/8526971a-6b74-4daa-a108-4fbcfef06ee4-20230824160951-zmhnn.mp4" style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '1'}} loop autoPlay playsInline muted></video>
                <div style={{width: '151.8px', height: '151.8px', top: '35px', left: '134px', position: 'absolute', zIndex: '2', overflow: 'hidden', borderWidth: '2px', borderRadius: '12px', borderStyle: 'solid', borderColor: 'white'}}>
                    <img src="https://w.ladicdn.com/s750x550/629a0b2bb9cb4f0020e11d7d/thiet-ke-chua-co-ten-20231017031849-szj9l.png" style={{width: '406px', height: '213px', top: '-12px', left: '-80px', position: 'relative'}}></img>
                </div>
                <div style={{width: '203px', top: '195px', left: '108px', position: 'absolute', zIndex: '2'}}>
                    <h1 style={{position: 'relative', fontFamily: 'Roboto, sans-serif', fontSize: '26px', fontWeight: 'bold', lineHeight: '1.2', color: 'rgb(255, 255, 255)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 2px 3px 3px'}}>Mr. Lý Đức Nhật <br/></h1>
                </div>
                <div style={{width: '206px', top: '226px', left: '107px', position: 'absolute', zIndex: '2'}}>
                    <h1 style={{position: 'relative', width: '100%', fontFamily: '"Roboto Slab", serif', fontSize: '28px', fontWeight: 'bold', lineHeight: '1.4', color: 'rgb(255, 189, 89)', textAlign: 'center', textShadow: 'rgb(0, 0, 0) 1px 2px 3px'}}>Chủ tịch HĐQT <br/></h1>
                </div>
                <div style={{display: 'flex', top: '334.998px', left: '20.8322px', position: 'absolute', zIndex: '2', justifyContent: 'space-between', flexWrap: 'wrap', width: '400px'}}>
                {
                    jsonObject.map((item, index) => {
                        
                        if(index == 2) {
                            return(
                                <div style={{width: '95.701px', height: '95.701px', marginTop: '-46px', marginBottom: 20, zIndex: '2', overflow: "hidden", marginRight: '10px'}}>
                                    <img src={item.imgRef} style={{width: '109.192px', height: '109.192px', top: '-6.74545px', left: '-6.74545px', position: 'relative'}}></img>
                                </div>
                            )
                        } else {
                            return(
                                <div style={{marginRight: '10px', width: '50px', height: '50px', backgroundColor: 'white', borderWidth: '1px', borderRadius: '4px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', boxShadow: 'rgb(0, 128, 55) 2px 2px 4px 0px'}}>
                                    <a href={item.aRef}>
                                        <img style={{ width: '100%', height: '100%'}} src={item.imgRef}></img>
                                    </a>
                                </div>
                            )
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Page