import React from 'react'
import '../scss/main.scss'


const IntroReviews = (pops) => {
    return (
        <div className ="section-result">
            <div className="u-center-text u-margin-bottom-big heading-primary">
                <h2 className="heading-primary--main heading-review">
                    체형교정후기 및 전후 비교
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-four u-margin-bottom-small black-text">김정환</h3>
                    <p className="paragraph black-text">
                        허리 아파서 걷는것도 불편하고 운동하고 나면 통증이 심했는데 몇회 교정을 받은후 체형이 잘 잡혀서 운동하기 훨씬 수월해졌어요.
                    </p>
                    <h3 className="heading-four u-margin-bottom-small black-text">한미숙</h3>
                    <p className="paragraph black-text">
                        왼쪽 무릅과 왼쪽 골반 통증이 심해서 똑바로 누워서 잠도 못자고 새우잠을 잤었고 무릅통증 때문에 오래 걷지도 못했는데 교정운동 통해 모든 증상이 많이 호전되었습니다.

                    </p>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={require('../assets/images/nat-1-large.jpg')} alt="" className="composition__photo composition__photo--p1" />
                        <img src={require('../assets/images/nat-2-large.jpg')}  alt="" className="composition__photo composition__photo--p2" />
                        <img src={require('../assets/images/nat-3-large.jpg')}  alt="" className="composition__photo composition__photo--p3" />
                        <img src={require('../assets/images/nat-3-large.jpg')}  alt="" className="composition__photo composition__photo--p4" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroReviews;