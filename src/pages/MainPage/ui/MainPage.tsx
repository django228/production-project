import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTheme } from 'app/hooks';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

const MainPage = () => {
    const { t } = useTranslation('main');
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ padding: '20px' }}>
            <h1>{t('book.title')}</h1>
            
            <p><a id="00"></a></p>
            
            <p>{t('book.dedication.title')}</p>
            
            <p>{t('book.dedication.paragraph1')}</p>
            
            <p>{t('book.dedication.title2')}</p>
            
            <hr />
            <h1><a id="01"></a>{t('book.chapter1.title')}</h1>
            
            <p>{t('book.chapter1.paragraph1')}</p>
            
            <img className="center" alt="Boa" src={image1} height="183" width="301" />
            <p><em>{t('book.chapter1.quote1')}</em></p>
            
            <p>{t('book.chapter1.paragraph2')}</p>
            
            <img className="center" alt="Hat" src={image2} height="80" width="241" />
            <p>{t('book.chapter1.paragraph3')}</p>
            
            <p><em>{t('book.chapter1.quote2')}</em></p>
            
            <p>{t('book.chapter1.paragraph4')}</p>
            
            <img className="center" alt="Elephant inside the boa" src={image3} height="92" width="242" />
            <p>{t('book.chapter1.paragraph8')}</p>
            
            <p>{t('book.chapter1.paragraph5')}</p>
            
            <p>{t('book.chapter1.paragraph6')}</p>
            
            <p>{t('book.chapter1.paragraph7')}</p>
            
            <p><em>{t('book.chapter1.quote4')}</em></p>
            
            <p>{t('book.chapter1.paragraph9')}</p>
            
            <hr />
            <h1><a id="02"></a>{t('book.chapter2.title')}</h1>
            
            <p>{t('book.chapter2.paragraph1')}</p>
            
            <p>{t('book.chapter2.paragraph2')}</p>
            
            <p><em>{t('book.chapter2.quote1')}</em></p>
            
            <p><em>{t('book.chapter2.quote2')}</em></p>
            
            <p><em>{t('book.chapter2.quote3')}</em></p>
            
            <p>{t('book.chapter2.paragraph3')}</p>
            
            <img className="center" alt="The Little prince" src={image4} height="385" width="363" />
            <p>{t('book.chapter2.paragraph4')}</p>
            
            <p>{t('book.chapter2.paragraph5')}</p>
            
            <p><em>{t('book.chapter2.quote4')}</em></p>
            
            <p>{t('book.chapter2.paragraph6')}</p>
            
            <p><em>{t('book.chapter2.quote5')}</em></p>
            
            <p><em>{t('book.chapter2.quote6')}</em></p>
            
            <p>{t('book.chapter2.paragraph7')}</p>
            
            <p><em>{t('book.chapter2.quote7')}</em></p>
            
            <p>{t('book.chapter2.paragraph8')}</p>
            
            <img className="center" alt="Sick sheep" src={image5} height="113" width="128" />
            <p><em>{t('book.chapter2.quote8')}</em></p>
            
            <p>{t('book.chapter2.paragraph9')}</p>
            
            <img alt="A ram." src={image6} className="center" height="119" width="126" />
            <p><em>{t('book.chapter2.quote9')}</em></p>
            
            <p>{t('book.chapter2.paragraph10')}</p>
            
            <p><em>{t('book.chapter2.quote10')}</em></p>
            
            <img alt="Old sheep" src={image7} className="center" height="98" width="113" />
            <p>{t('book.chapter2.paragraph11')}</p>
            
            <img alt="Sheep in the box" src={image8} className="center" height="103" width="200" />
            <p><em>{t('book.chapter2.quote11')}</em></p>
            
            <p>{t('book.chapter2.paragraph12')}</p>
            
            <p><em>{t('book.chapter2.quote12')}</em></p>
            
            <p><em>{t('book.chapter2.quote13')}</em></p>
            
            <p><em>{t('book.chapter2.quote14')}</em></p>
            
            <p><em>{t('book.chapter2.quote15')}</em></p>
            
            <p>{t('book.chapter2.paragraph13')}</p>
            
            <p><em>{t('book.chapter2.quote16')}</em></p>
            
            <p>{t('book.chapter2.paragraph14')}</p>
            
            <hr />
            <h1><a id="03"></a>{t('book.chapter3.title')}</h1>
            
            <p>{t('book.chapter3.paragraph1')}</p>
            
            <p>{t('book.chapter3.paragraph2')}</p>
            
            <img alt="The Little prince" src={image9} className="center" height="440" width="400" />
            <p><em>{t('book.chapter3.quote1')}</em></p>
            
            <p><em>{t('book.chapter3.quote2')}</em></p>
            
            <p>{t('book.chapter3.paragraph3')}</p>
            
            <p>{t('book.chapter3.quote3')}</p>
            
            <p><em>{t('book.chapter3.quote4')}</em></p>
            
            <p><em>{t('book.chapter3.quote5')}</em></p>
            
            <p>{t('book.chapter3.paragraph4')}</p>
            
            <p><em>{t('book.chapter3.quote6')}</em></p>
            
            <p><em>{t('book.chapter3.quote7')}</em></p>
            
            <p><em>{t('book.chapter3.quote8')}</em></p>
            
            <p>{t('book.chapter3.paragraph5')}</p>
            
            <p>{t('book.chapter3.paragraph6')}</p>
            
            <p><em>{t('book.chapter3.quote9')}</em></p>
            
            <p><em>{t('book.chapter3.quote10')}</em></p>
            
            <p><em>{t('book.chapter3.quote11')}</em></p>
            
            <p><em>{t('book.chapter3.quote12')}</em></p>
            
            <img alt="The Little prince and stars" src={image10} className="center" height="537" width="393" />
            <p><em>{t('book.chapter3.quote13')}</em></p>
            
            <p><em>{t('book.chapter3.quote14')}</em></p>
            
            <p><em>{t('book.chapter3.quote15')}</em></p>
            
            <p><em>{t('book.chapter3.quote16')}</em></p>
            
            <p>{t('book.chapter3.quote17')}</p>
                        
            <hr />

        </div>
    );
};

export default MainPage;
