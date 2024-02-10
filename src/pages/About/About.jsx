import "./About.css";
import About_Bg_Image from "../../images/about_bg_image.jpg";
import About_Image_1 from '../../images/About_1_Image.jpg';
import About_Image_2 from '../../images/about_image_2.jpg';
import About_Image_3 from '../../images/about_image_3.jpg';

const About = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__container-bg">
            <img className="w-full" src={About_Bg_Image} alt="Header bg Image" />
          </div>
          <div className="header__content">
            <h2 className="about_h2">Haqqımızda</h2>
            <p className="head_about_p">
              Sena Qrup, bu şirkətlər arasında sahib olduğu fəaliyyət sahələri
              ilə müştərilərə müxtəlif xidmətlər təqdim etməklə birlikdə,
              sürətli inkişaf və sənaye sahəsində keyfiyyətli məhsulların
              təminatı ilə tanınır.
            </p>
          </div>
        </div>
      </header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img className="about_line_img" src={About_Image_1} alt="Story Image" />
          </div>

          <div className="about__section-content">
            <h1 className="title_h1">Məqsədimiz</h1>

            <p className="desc_p">
           Şirkətin məqsədi, Azərbaycan bazarında fəaliyyət göstərən müxtəlif sahələrdə fəaliyyət göstərən şirkətləri bir araya gətirərək, onların birgə inkişafını dəstəkləmək və müştərilərə daha geniş bir təklifat sıralaması təqdim etməkdir. Bu məqsədlər aşağıdakılardır:
            </p>
           
              <li><span>Sektörlər Arası İş Birliyi:</span>Sena Qrup, müxtəlif sahələrdə fəaliyyət göstərən şirkətləri birləşdirir və bu sayədə bu şirkətlərin təcrübə və bacarıqlarını mübadilə etməyə imkan yaradır. Sektörlər arası iş birliyi, hər bir şirkətin öz sahəsində daha effektiv fəaliyyət göstərməsinə kömək edir.</li>
              <br />
              <li><span>Yerli İstehsalın Dəstəklənməsi:</span>Yusuf-UM MMC kimi şirkətlərlə birgə işləyərək, yerli istehsalı dəstəkləyir və Azərbaycan bazarında özünəməxsus və keyfiyyətli məhsulların inkişafını təmin edir.</li>
              <br />
              <li><span>Müştərilərə Geniş Təklifat Sıralaması: </span>EH Trade və digər təşkilatların əməkdaşlığı sayəsində Sena Qrup, müştərilərinin tələblərinə daha geniş bir təklifat sıralaması təqdim edir. Bu, müştərilərin ehtiyaclarını daha effektiv şəkildə qarşılayaraq, müştəri baxımından rahatlıq və çeşidliliyi təmin edir.</li>
              <br />
              <li><span>Korporativ İnkişaf və Təcrübə Paylaşımı: </span>Şirkətlər arası iş birliyi, təşkilatın üzv şirkətlərinin korporativ inkişafını dəstəkləyir və təcrübələrin mübadiləsi, hər bir şirkətin daha effektiv idarəetməsini və inkişafını təmin edir.</li>
            
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1 className="title_h1">Vəzifəmiz</h1>

            <p className="desc_p">
            Şirkətimizin vəzifəsi, daxil olan şirkətlərlə birgə effektiv fəaliyyət göstərərək müxtəlif sahələrdə inkişaf etməsini təmin etməkdir. İndiki məlumatlar çərçivəsində təşkilatın əsas vəzifələri aşağıdakılardır:
            </p>
           
          
              <li><span>İş Birliyi və Təcrübə Paylaşımı:</span> Sena Qrup, üzv şirkətlərin müxtəlif sahələrdəki təcrübə və bacarıqlarını bir araya gətirir. Bu, şirkətlər arasında iş birliyini təmin edir və hər birinin digərindən öyrənə biləcəyi təcrübələri paylaşmağa imkan yaradır.</li>
              <br />
              <li><span>Resursların Effektiv İdarə Edilməsi:</span> Sena Qrup, üzv şirkətlərin effektiv şəkildə resursları idarə etməsinə kömək edir. Bu, təşkilatın hər bir üzvünün təcrübə, texnologiya, və müxtəlif sahələrdəki bacarıqlarından faydalanmağa nail olmağı hədəfləyir.</li>
              <br />
              <li><span>Bazar Təhlili və Strategiya İnkişafı:</span> Qrup, bazarın təhlilini və müstəqil strategiyaların inkişafını dəstəkləyir. Bu, hər bir üzvün öz sahəsində daha konkret və effektiv addımlar atmasına kömək edir.</li>
              <br />
              <li><span>Ümumi Məhsul Təchizatı və Xidmətlər:</span> Sena Qrup, üzv şirkətlərin müxtəlif məhsulları və xidmətləri təchiz etməsini təmin edir. Bu, təşkilatın çeşidli sahələrdə müştərilərinin tələblərinə cavab verə bilən bir təklifat portfeli yaratmağa nail olmağı hədəfləyir.</li>
              <br />
              <li><span>Strateji İdarəetmə və Planlaşdırma:</span> Sena Qrup, üzv şirkətlərinin birlikdə strateji planlarını idarə etməsini və təşkilatın müstəqil inkişafını təmin etməsini dəstəkləyir.</li>
            
          </div>

          <div className="about__section-image">
            <img className="about_line_img" src={About_Image_2} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img className="about_line_img" src={About_Image_3} alt="mission Image" />
          </div>

          <div className="about__section-content">
            <h1 className="title_h1">İstiqamətimiz</h1>

            <p className="desc_p">
            Sena Qrup, Azərbaycan bazarında fəaliyyət göstərən üzv şirkətləri vasitəsilə müxtəlif sahələrdə fəaliyyət göstərməklə və onların birlikdə fayda yaratmağa nail olmaqla, geniş bir sahədə istiqamət alır. İstiqamətlər aşağıdakılardır:
            </p>
            <li><span>Yerli İstehsal və Keyfiyyətli Məhsullar: </span>Yusuf-UM MMC, 15 ildən çoxdur ki, Azərbaycan bazarında fəaliyyət göstərərək yerli istehsalı artırmağa və keyfiyyətli məhsullar təqdim etməyə nail olur. Sena Qrup, bu sahədə yerli məhsulların inkişafını dəstəkləyir və bu istiqamətdə fəaliyyətlərini sürdürür.</li>
            <br />
            <li><span>Mühasibat, Vergi və Gömrük Rəsmiləşdirilməsi: </span>Unity Consulting MMC, mühasibat, vergi, audit və dizayn sahələrində fəaliyyət göstərərək sahibkarlara müxtəlif xidmətlər təqdim edir. Şirkət, Sena Qrupunun müştərilərini mühasibat və vergi sahəsində dəstəkləyir, həmçinin gömrük rəsmiləşdirilməsi prosesində yardım edir.</li>
            <br />
            <li><span>Təchizat və Təhlükəsiz Təminat:</span>EH Trade, Azərbaycan bazarına digər ölkələrdən keyfiyyətli və münasib qiymətli məhsulların təchizatını təmin edir. Şirkət, müştərilərinin tələblərinə cavab verir və Sena Qrupunun təchizat və təhlükəsiz təminat sahəsində fəaliyyətlərini dəstəkləyir.</li>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
