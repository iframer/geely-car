import React from "react";

const Map = () => {
  return (
    

    <div>
        <div style={{fontSize : '2.4vh',textAlign: 'start', margin : '0 0 2vh 30vh'}}>        
        <p>*Предложение банка. Оформление в кредит и рассрочку доступно только при подтверждении доходов.
        <br />**Максимальная выгода при учете программы трейд-ин. Не является публичной офертой.s</p>
        </div>
      <iframe
        src="https://yandex.kz/map-widget/v1/?filter=car_brand%3Ageely&ll=71.406937%2C51.074318&mode=search&oid=229017451612&ol=biz&sctx=ZAAAAAgCEAAaKAoSCe244XfTJ1NAEUGBd%2FLpmUVAEhIJ%2BWcG8YEdxz8RYobGE0Gcsz8iBgABAgMEBSgKOABAowFIAWoCa3qCAQ9jYXJfYnJhbmQ6Z2VlbHmdAc3MTD2gAQCoAQC9AcOkKVfCAQzc%2BIOU1Qbi6viJ7gaCAgxnZWVseSBhc3RhbmGKAgkxODQxMDUzMjKSAgMxNjOaAgxkZXNrdG9wLW1hcHOqAjE4ODg0Mjc0NzYwOCwxMzM2Njc5ODUxODgsNTM0OTg5MjQ0NTIsMjE0MDYwMTMyNDI0sAIB&sll=71.406937%2C51.074318&sspn=0.057335%2C0.032984&text=geely%20astana&utm_source=share&z=14"
        width="100%"
        height="700"
        frameBorder="1"
        allowFullScreen={true}
        style={{ position: "relative" }}
        title="Geely Astana Map"
      ></iframe>

        <p style={{padding : "5vh 0vh 5vh 25vh", textAlign : "start" , fontSize : "2.5vh",color : 'gray'}}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
    </div>
  );
};

export default Map;
