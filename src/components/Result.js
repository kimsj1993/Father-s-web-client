import React from 'react'
import '../scss/main.scss'

const Result = () => {
    return (
        <div className="section-about">
            <div style={{textAlign:'center'}}>
            <h3 className="heading-secondary u-margin-bottom-medium">교정 효과</h3>

            </div>

            <div className="row">

                <div class="col-1-of-3">
                    <div className="result-box ">
                        <h3 className="heading-tertiary u-margin-bottom-small">첫번째</h3>
                        <p>
                        체형교정 운동으로 발목 무릎 골반 허리 목 어깨 머리 턱관절 통증 제로로 만듭시다!
                        </p>
                   </div>
                </div>
                <div class="col-1-of-3">
                    <div className="result-box">
                        <h3 className="heading-tertiary u-margin-bottom-small">두번째</h3>
                        <p>
                        운동과 노동은 자세차이 지극히 작은 자세하나가 나를 건강하고 아름답고 멋진 몸을 만듭시다!                     
                        </p>
                   </div>
                </div>
                <div class="col-1-of-3">
                    <div className="result-box">
                        <h3 className="heading-tertiary u-margin-bottom-small">세번째</h3>
                        <p>
                        체형교정 운동으로 만성피로에서 해방됩시다!
                        </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Result;