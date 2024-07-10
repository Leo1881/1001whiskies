import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Whiskeys.css';
import Popup from '../components/Popup'; 

import akashiImage from '../assets/images/whiskeys/akashi.jpg';
import nikkadaysImage from '../assets/images/whiskeys/nikkadays.jpg';
import tenjakuImage1 from '../assets/images/whiskeys/tenjaku1.jpg';
import tenjakuImage2 from '../assets/images/whiskeys/tenjaku2.jpg';
import ardbeganoaImage from '../assets/images/whiskeys/ardbeganoa.jpg';
import auchentoshenImage from '../assets/images/whiskeys/auchentoshen.jpg';
import bainesImage from '../assets/images/whiskeys/baines.jpg';
import belvenie12Image from '../assets/images/whiskeys/belvenie12.jpg';
import glenfiddich15Image from '../assets/images/whiskeys/glenfiddich15.jpg';
import greenspotImage from '../assets/images/whiskeys/greenspot.jpg';
import irishmanImage from '../assets/images/whiskeys/irishman.jpg';
import kilbegganImage from '../assets/images/whiskeys/kilbeggan.jpg';
import lochlomondImage from '../assets/images/whiskeys/lochlomond.jpg';
import macallen12Image from '../assets/images/whiskeys/macallen12.jpg';
import mcconnellsImage from '../assets/images/whiskeys/mcconnells.jpg';
import redbreast12Image from '../assets/images/whiskeys/redbreast12.jpg';
import tamnavulinImage from '../assets/images/whiskeys/tamnavulin.jpg';
import threeshipsImage from '../assets/images/whiskeys/threeships.jpg';
import toorImage from '../assets/images/whiskeys/toor.jpg';
import tullamoredewxoImage from '../assets/images/whiskeys/tullamoredewxo.jpg';
import umikiImage from '../assets/images/whiskeys/umiki.jpg';

const Whiskeys = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const whiskeyImages = [
    { 
      id: 1, 
      src: akashiImage, 
      alt: 'Akashi', 
      rating: 4.5,
      paragraphs: [
        'Akashi Whisky is a distinguished Japanese whisky crafted by the Eigashima Shuzo distillery in Akashi, Japan. Known for its harmonious balance and smooth finish, Akashi combines traditional Scottish whisky-making techniques with Japanese precision. It offers a versatile range from light, floral expressions to rich, sherried profiles, making it a favorite among both connoisseurs and casual whisky enthusiasts. Perfect for sipping neat or in cocktails, Akashi Whisky embodies the delicate artistry and craftsmanship of Japanese whisky production.',
        'Akashi Whisky typically features notes of citrus, honey, vanilla, and a hint of oak, with a smooth and clean finish.',
        'Origin : Japan.'
      ]
    },
    { 
      id: 2, 
      src: nikkadaysImage, 
      alt: 'Nikka Days', 
      rating: 4,
      paragraphs: [
        'Nikka Days Whisky is a delightful blend from the renowned Nikka Whisky Distilling Co., crafted in Japan. It represents a harmonious balance of malt and grain whiskies, designed to be smooth and versatile for various drinking occasions. With its accessible character, Nikka Days appeals to both whisky enthusiasts and newcomers alike, making it a staple in any whisky collection.',
        'Nikka Days Whisky presents a bouquet of fruity aromas with hints of orange peel and peach. On the palate, it offers a gentle sweetness, balanced by subtle notes of vanilla and oak. The finish is clean and refreshing, leaving a lingering impression of citrus and malt.',
        'Origin : Japan.'
      ]
    },
    { 
      id: 3, 
      src: tenjakuImage1, 
      alt: 'Tenjaku Blended Whiskey', 
      rating: 3.5,
      paragraphs: [
        'Tenjaku Blended Whiskey is a premium Japanese blend crafted by Kumesen Syuzo Co., Ltd., in Okinawa, Japan. It combines carefully selected malt and grain whiskies to create a harmonious balance of flavors. Known for its approachable character, Tenjaku Blended Whiskey is perfect for both whisky aficionados and casual drinkers, offering a taste of Japanese craftsmanship.',
        'Exhibits a bouquet of floral notes, honey, and a touch of citrus. The palate features a blend of sweet vanilla, caramel, and subtle spice, leading to a smooth and lingering finish with hints of oak.',
        'Origin: Japan'
      ]
    },
    { 
      id: 4, 
      src: tenjakuImage2, 
      alt: 'Tenjaku Pure Malt Whiskey', 
      rating: 4,
      paragraphs: [
        'Tenjaku Pure Malt Whiskey is a premium Japanese whisky crafted exclusively from malted barley. Produced by Kumesen Syuzo Co., Ltd., in Okinawa, Japan, it showcases the depth and complexity of malt whisky. With its rich flavors and smooth texture, Tenjaku Pure Malt Whiskey is a testament to Japanese whisky-making excellence, suitable for connoisseurs seeking a refined drinking experience.',
        'Offers aromas of dried fruit, honey, and a hint of smoke. On the palate, it reveals layers of caramel, toffee, and spicy oak, culminating in a long, satisfying finish with lingering notes of vanilla and malt.',
        'Origin: Japan'
      ]
    },
    { 
      id: 5, 
      src: ardbeganoaImage, 
      alt: 'Ardbeg AN OA', 
      rating: 4.5,
      paragraphs: [
        'Ardbeg An Oa is a distinguished single malt Scotch whisky from the Ardbeg Distillery on the Isle of Islay, Scotland. Named after the Mull of Oa, a rugged headland nearby, this whisky is celebrated for its unique smoky character and complexity. Matured in a combination of different cask types, including Pedro Ximénez, charred oak, and ex-bourbon barrels, Ardbeg An Oa offers a well-balanced blend of sweetness and peatiness, making it a favorite among whisky connoisseurs worldwide.',
        'Exhibits aromas of toffee, aniseed, and dates, with hints of peach and banana. The palate features flavors of creamy toffee, aniseed, and treacle, balanced by notes of orange and smoky tea leaves. The finish is long, sweet, and rounded, with lingering notes of caramel and butterscotch.',
        'Origin: Scotland, Isle of Islay'
      ]
    },
    { 
      id: 6, 
      src: auchentoshenImage, 
      alt: 'Auchentoshan', 
      rating: 4.5,
      paragraphs: [
        'Auchentoshan is a renowned Lowland single malt Scotch whisky produced at the Auchentoshan Distillery near Glasgow, Scotland. Known for its triple distillation process, which is unusual in Scotland, Auchentoshan whisky is celebrated for its light and gentle character. This triple distillation method contributes to its smoothness and subtle flavors, making Auchentoshan a favorite among whisky enthusiasts looking for a lighter Scotch experience.',
        'Offers aromas of vanilla, coconut, and citrus fruits. On the palate, it presents flavors of almond, green apple, and hints of floral notes. The finish is clean, crisp, and refreshing, with a touch of oak and a lingering sweetness.',
        'Origin: Scotland, Lowlands'
      ]
    },
    { 
      id: 7, 
      src: bainesImage, 
      alt: "Bain's Cape Mountain Whisky", 
      rating: 4.5,
      paragraphs: [
        "Bain's Cape Mountain Whisky is a premium South African whisky crafted at the James Sedgwick Distillery in Wellington, South Africa. It is notable for being the first single grain whisky produced in South Africa. Bain's is made from 100% South African yellow maize, distilled twice in column stills, and matured in first-fill bourbon casks. The result is a smooth and rich whisky with notes of toffee, spice, and vanilla, reflecting its warm climate maturation.",
        'Offers aromas of caramel, banana, and toasted almonds. The palate features flavors of creamy vanilla, honey, and hints of oak spice. The finish is long and sweet, with lingering notes of tropical fruits and butterscotch.',
        'Origin: South Africa'
      ]
    },
    { 
      id: 8, 
      src: belvenie12Image, 
      alt: 'The Balvenie DoubleWood 12 Year Old', 
      rating: 4.5,
      paragraphs: [
        'The Balvenie DoubleWood 12 Year Old is a renowned single malt Scotch whisky from the Balvenie Distillery in Dufftown, Scotland. It is matured in two types of wood: traditional oak whisky casks and European oak sherry casks. This unique maturation process imparts layers of flavors, with the whisky initially gaining character from the oak casks before being transferred to the sherry casks for additional richness and depth. The result is a balanced whisky with rich fruit, honeyed sweetness, and subtle spice notes.',
        'Displays aromas of dried fruits, cinnamon, and vanilla. On the palate, it offers flavors of nutmeg, citrus peel, and hints of dried fruits and vanilla. The finish is warm, with lingering notes of spices and oak.',
        'Origin: Scotland, Speyside'
      ]
    },
    { 
      id: 9, 
      src: glenfiddich15Image, 
      alt: 'Glenfiddich 15 Year Old', 
      rating: 4.5,
      paragraphs: [
        'Glenfiddich 15 Year Old is a distinguished single malt Scotch whisky from the Glenfiddich Distillery in Dufftown, Scotland. It is matured in three types of casks: traditional American bourbon, European oak sherry, and new oak casks. This unique Solera vatting process involves marrying whiskies from these different casks to create a harmonious and complex expression. Glenfiddich 15 Year Old is known for its depth of flavor, with notes of fruit, spice, and oak intertwining seamlessly.',
        'Offers aromas of baked apple, cinnamon, and toffee. The palate features flavors of dried fruit, nutmeg, and hints of creamy vanilla. The finish is long and lingering, with notes of oak and a touch of spice.',
        'Origin: Scotland, Speyside'
      ]
    },
    { 
      id: 10, 
      src: greenspotImage, 
      alt: 'Green Spot Irish Whiskey', 
      rating: 4.5,
      paragraphs: [
        'Green Spot Irish Whiskey is a revered single pot still Irish whiskey produced at the Midleton Distillery in Cork, Ireland. It is part of the Mitchell & Son family of whiskies, known for its rich history and dedication to quality. Green Spot is matured in a combination of ex-bourbon and sherry casks, resulting in a balanced and flavorful whiskey with a distinctive character. It is known for its smoothness, complexity, and traditional Irish whiskey charm.',
        'Exhibits aromas of fresh cut grass, barley sugar, and honey. On the palate, it presents flavors of green apple, vanilla, and toasted oak. The finish is long and satisfying, with hints of spices and a touch of sweetness.',
        'Origin: Ireland'
      ]
    },
    { 
      id: 11, 
      src: irishmanImage, 
      alt: 'The Irishman', 
      rating: 4.5,
      paragraphs: [
        'The Irishman is a premium range of Irish whiskies crafted at Walsh Whiskey Distillery, located in County Carlow, Ireland. Known for its dedication to traditional methods and quality ingredients, The Irishman offers a variety of expressions, including single malt, blended, and limited edition releases. Each whiskey is carefully crafted to showcase the smooth and approachable character that Irish whiskey is renowned for, with a focus on balance and depth of flavor.',
        'Depending on the expression, The Irishman whiskies can feature a range of aromas and flavors, including notes of honey, citrus, vanilla, and oak. Each whiskey is designed to provide a memorable drinking experience that highlights the best of Irish whiskey craftsmanship.',
        'Origin: Ireland'
      ]
    },
    { 
      id: 12, 
      src: kilbegganImage, 
      alt: 'Kilbeggan Irish Whiskey', 
      rating: 4.5,
      paragraphs: [
        'Kilbeggan Irish Whiskey is a traditional Irish whiskey produced at the Kilbeggan Distillery, one of the oldest licensed distilleries in Ireland located in County Westmeath. It embodies the rich heritage and craftsmanship of Irish whiskey-making, known for its smooth and approachable character. Kilbeggan is crafted using a blend of malted barley and grain whiskey, distilled in copper pot stills and matured in oak casks, resulting in a whiskey with a balanced flavor profile and a hint of sweetness.',
        'Offers aromas of caramel, toffee, and vanilla. The palate features flavors of honey, citrus, and a touch of spice. The finish is smooth and satisfying, with lingering notes of oak and malt.',
        'Origin: Ireland, County Westmeath'
      ]
    },
    { 
      id: 13, 
      src: lochlomondImage, 
      alt: 'Loch Lomond Scotch Whisky', 
      rating: 4.5,
      paragraphs: [
        'Loch Lomond Scotch Whisky is produced at the Loch Lomond Distillery, located near the picturesque Loch Lomond in Alexandria, Scotland. The distillery is known for its innovative approach to whisky-making, offering a variety of expressions including single malts, blends, and grain whiskies. Loch Lomond whiskies are crafted using traditional methods and a combination of pot stills and column stills, allowing for a wide range of flavor profiles and styles. They are celebrated for their smoothness, complexity, and the distinct character derived from their unique distillation process.',
        'Depending on the expression, Loch Lomond whiskies can feature a range of aromas and flavors, including notes of fruit, vanilla, oak, and gentle peat smoke. Each whisky is crafted to highlight the characteristics of the Highland region while offering a memorable drinking experience.',
        'Origin: Scotland, Highland region'
      ]
    },
    { 
      id: 14, 
      src: macallen12Image, 
      alt: 'The Macallan 12 Year Old', 
      rating: 4.5,
      paragraphs: [
        'The Macallan 12 Year Old is a prestigious single malt Scotch whisky from The Macallan Distillery, located in Craigellachie, Scotland. It is matured exclusively in sherry-seasoned oak casks from Jerez, Spain, using traditional craftsmanship and meticulous attention to detail. The result is a whisky known for its rich, full-bodied character and complexity, with a balance of dried fruits, spices, and oak influence.',
        'Offers aromas of dried fruits, ginger, and vanilla. The palate features flavors of raisins, sultanas, cinnamon, and nutmeg, complemented by notes of oak and a hint of citrus zest. The finish is long and warming, with lingering spices and a touch of sweetness.',
        'Origin: Scotland, Speyside region'
      ]
    },
    { 
      id: 15, 
      src: mcconnellsImage, 
      alt: "McConnell's Irish Whiskey", 
      rating: 4.5,
      paragraphs: [
        "McConnell's Irish Whiskey is a historic brand that dates back to the 18th century in Ireland. It is known for its smooth and approachable character, crafted using a blend of malt and grain whiskies. McConnell's whiskies typically offer a balance of sweetness, fruitiness, and subtle spice, reflecting the traditional Irish whiskey style.",
        "Depending on the expression, McConnell's Irish Whiskey may feature aromas of honey, vanilla, and citrus. The palate can exhibit flavors of caramel, oak, and dried fruits, with a smooth and satisfying finish.",
        'Origin: Ireland'
      ]
    },
    { 
      id: 16, 
      src: redbreast12Image, 
      alt: 'Redbreast Irish Whiskey', 
      rating: 4.5,
      paragraphs: [
        'Redbreast Irish Whiskey is produced at the Midleton Distillery in Cork, Ireland, renowned for its single pot still Irish whiskey production. It is known for its rich, complex flavors and smooth texture, achieved through a combination of malted and unmalted barley, triple distillation, and aging in a combination of bourbon and sherry casks. Redbreast whiskies are characterized by their full-bodied nature, fruity flavors, and signature spicy finish.',
        'Typically offers aromas of dried fruit, nuts, vanilla, and a hint of spice. The palate features flavors of rich fruitcake, toasted oak, caramel, and a touch of nuttiness. The finish is long, warm, and lingering, with notes of spice and oak.',
        'Origin: Ireland'
      ]
    },
    { 
      id: 17, 
      src: tamnavulinImage, 
      alt: 'Tamnavulin Scotch Whisky', 
      rating: 4.5,
      paragraphs: [
        "Tamnavulin is a single malt Scotch whisky distillery that produces whiskies known for their light and fruity character, typical of Speyside whiskies. Founded in 1966, Tamnavulin whiskies are crafted using traditional methods, including maturation in oak casks, to achieve a balanced flavor profile. The distillery's location near the River Livet contributes to the whisky's delicate and smooth nature.",
        'Offers aromas of orchard fruits, honey, and vanilla. The palate features flavors of apple, pear, citrus zest, and a hint of malt sweetness. The finish is clean and refreshing, with lingering fruity notes.',
        'Origin: Scotland, Speyside region'
      ]
    },
    { 
      id: 18, 
      src: threeshipsImage, 
      alt: 'Three Ships Whisky', 
      rating: 4.5,
      paragraphs: [
        "Three Ships Whisky is produced by The James Sedgwick Distillery in Wellington, South Africa. It is known for its commitment to quality and innovation in whisky-making. Three Ships offers a range of expressions, including blended and single malt whiskies, each crafted with meticulous attention to detail and using locally sourced ingredients. The whiskies often showcase a blend of traditional methods and modern techniques, reflecting the distillery's dedication to producing distinctive South African whiskies.",
        'Depending on the expression, Three Ships whiskies can feature a range of aromas and flavors, including notes of fruit, spice, honey, and oak. Each whisky is designed to highlight the unique characteristics of South African whisky production while offering a memorable drinking experience.',
        'Origin: South Africa'
      ]
    },
    { 
      id: 19, 
      src: toorImage, 
      alt: 'TOOR', 
      rating: 4.5,
      paragraphs: [
        "TBA",
        'TBA',
        'Origin: South Africa'
      ]
    },
    { 
      id: 20, 
      src: tullamoredewxoImage, 
      alt: 'Tullamore D.E.W. XO (Extra Old)', 
      rating: 4.5,
      paragraphs: [
        'Tullamore D.E.W. XO is a triple-distilled Irish whiskey that undergoes a special finish in first-fill Caribbean rum casks. This unique maturation process imparts rich flavors and adds depth to the whiskey, complementing its traditional smoothness and character. Tullamore D.E.W. is known for blending together all three types of Irish whiskey: pot still, malt, and grain, resulting in a balanced and flavorful whiskey.',
        'Offers aromas of tropical fruits, vanilla, and caramel. The palate features flavors of ripe bananas, toffee, and a hint of spice from the rum cask influence. The finish is long, with lingering sweetness and a touch of oak.',
        'Origin: Ireland'
      ]
    },
    { 
      id: 21, 
      src: umikiImage, 
      alt: 'Umiki', 
      rating: 4.5,
      paragraphs: [
        'TBA',
        'TBA',
        'Origin: Japan'
      ]
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className="whiskeys-page">
        <h2>Cask Chronicles: Our Whiskey Tasting Journey</h2>
        <p>Explore our curated collection of tasted whiskeys, each bottle a chapter in our ongoing journey of discovery and appreciation for the world's finest spirits.</p>
        <div className="whiskeys-grid">
          {whiskeyImages.map((whiskey) => (
            <div key={whiskey.id} className="whiskey-item" onClick={() => handleImageClick(whiskey)}>
              <img src={whiskey.src} alt={whiskey.alt} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Popup image={selectedImage} onClose={handleClosePopup} />
      )}
      <Footer />
    </div>
  );
};

export default Whiskeys;
