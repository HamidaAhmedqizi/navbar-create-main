import React from "react";
import "./style.css";
import Unity_Bg_Image from "../../images/card_consulting.jpg";
import { Link } from "react-router-dom";
import Unity_Image_Bg_2 from "../../images/About_1_Image.jpg";

const EhTradeBgCards = () => {
  return (
    <>
      <header className="ehtrade_header">
        <div className="ehtrade_header__container">
          <div className="ehtrade_header__container-bg">
            <img src={Unity_Image_Bg_2} alt="ehtrade_Header bg Image" />
          </div>
          <div className="ehtrade_header__content">
            <h2 className="ehtrade_about_h2">Unity</h2>
            <p>
              Unity Consulting MMC 5 ildən çoxdurki mühasibatlıq,vergi,audit və
              dizaynla məşğuldur. Bir çox sahibkarlara vgömrük rəsmiləşdirilməsi
              xidmətlərində dəstək göstərmişdir.
            </p>
          </div>
        </div>
      </header>
      <div className="ehtrade_bg">
        <div className="ehtrade_bg-container">
          <div className="ehtrade_bg-container_left">
            <h1 className="ehtrade_bg-h1">Sizə Ən Yaxsı Məsləhət Lazimdir?</h1>
            <p className="ehtrade_bg_text-p">
            EH Trade, Sena Qrupunun bir tərkib hissəsi olaraq, 3 ildən çoxdur ki, Azərbaycan bazarında fəaliyyət göstərən və müxtəlif ölkələrdən təchizat təmin edərək keyfiyyətli məhsulları təqdim edən bir şirkətdir. Şirkətin fəaliyyət sahələri arasında ticarət, təchizat, və pazarlama yer alır.

EH Trade, digər ölkələrdən gətirdiyi məhsullar vasitəsilə Azərbaycan bazarında geniş bir məhsul çeşidini müştərilərinə çatdırmağa nail olur. Şirkət, keyfiyyətli məhsulları uyğun qiymətlərlə təqdim edərək müştəri memnuniyyətini əsas qoymuşdur.

Sena Qrupunun birləşdirici gücündən istifadə edən EH Trade, təqdim etdiyi məhsulları və xidmətləri mövcud müştəri baza və potensial müştərilər üçün daha geniş və çeşidlidir. Şirkət, müştərilərini təchizat və məhsulların seçimində və təklifatlardan istifadə etməkdə müstəqil və effektiv şəkildə idarə etməklə dəstəkləyir.

EH Trade, Sena Qrupunun geniş strategiyasına əlavə olaraq, müstəri münasibətlərinin inkişafına və keyfiyyətli məhsulların Azərbaycan bazarındakı mövcudluğunun artırılmasına nail olmağa çalışır.
            </p>

            <Link to={"/about"}>
              <button className="ehtrade_bg_button">Daha Çox Oxu...</button>
            </Link>
          </div>
          <div className="ehtrade_bg-container_right">
            <div className="ehtrade_bg_image-div">
              <img className="ehtrade_bg_image" src={Unity_Bg_Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EhTradeBgCards;
