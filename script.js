//Omer Nadam 304850977
//Talia Ohana 318966231

const pic1="https://res.cloudinary.com/hotels-co-il/image/upload/c_scale,w_900,h_550/v1599143259//brown_beach/Assaf_Pinchuk_photographer_5855.jpg"
const pic2="https://my.weekend.co.il/Templates/24445/Brown%20TLV%20(16).jpg?w=910&h=510&mode=crop"
const pic3= "https://passportnews.co.il/wp-content/uploads/2020/03/Brown-Beach-House-Croatia.-Photo-Assaf-Pinchuk-3-e1591258185878.jpg"
const pic4="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/london-hotel-with-hot-tub-in-room-2-1621509446.jpeg?crop=0.927xw:1.00xh;0.0578xw,0&resize=480:*"
const pic5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPPVIscEPDfKk7h5vkVWelSSKObEGgn5lUw&usqp=CAU"
 
const msg1={
    "msg_name":"Sleep",
    "pics":[pic2,pic4],
    "text_lines": ["King Size Bed !","Go to sleep !","Good Night","Bath"],
    "ad_time":10000,
    "template":1,
    "display_time": {
        "date":[new Date('January 1, 2022 00:00:00'), new Date('December 31, 2022 00:00:00')],
        "days":[1,3], //Sunday=0....
        "hours":[6,12]
    }
}
const msg2={
    "msg_name":"Time For Vacation",
    "pics":[pic1],
    "text_lines": ["When was your last vacation?","This is your time","Relax, take it easy","It's family time !","Come to visit us","Spa","Gym","Swimming Pool", "Resturants", "Bar"],
    "ad_time":10000,
    "template":2,
    "display_time" : {
        "date":[new Date('March 1, 2022 00:00:00'), new Date('April 30, 2023 23:59:00')],
        "days":[2,3], //Sunday=0....
        "hours":[10,23]
    }
}
const msg3={
    "msg_name":"Empty add",
    "pics":[],
    "text_lines": [],
    "ad_time":10000,
    "template":3,
    "display_time" : {
        "date":[new Date('May 1, 2022 00:00:00'), new Date('June 15, 2022 23:59:00')],
        "days":[0,1,2,3,4,5,6], //Sunday=0....
        "hours":[8,22]
    }
}
const msg4={
    "msg_name":"Connect details",
    "pics":[],
    "text_lines": ["Call us","Send us an email"],
    "ad_time":10000,
    "template":1,
    "display_time" : {
        "date":[new Date('March 29, 2022 00:00:00'), new Date('April 15, 2022 23:59:00')],
        "days":[1], //Sunday=0....
        "hours":[15,19]
    }
}
const msg5={
    "msg_name":"Swimming pool",
    "pics":[pic5,pic4],
    "text_lines": ["Big pool","Hot-Tub","Warm","Pool Party","Coctails Bar","Food","Agadudu"],
    "ad_time":10000,
    "template":2,
    "display_time" : {
        "date":[new Date('April 1, 2022 00:00:00'), new Date('April 30, 2022 23:59:00')],
        "days":[1,2,3], //Sunday=0....
        "hours":[1,23]
    }
}

var messages=[msg1,msg2,msg3,msg4,msg5]

var i = -1;


const checkIfDateIsValid = (item) => {
    const now = new Date();
    let isValidDate = false;
    let isValidDay = false;
    let isValidHour = false;

    if(now.getTime() > item.display_time.date[0] && now.getTime() < item.display_time.date[1]){
        isValidDate = true;
    }

    isValidDay = item.display_time.days.includes(now.getDay())  

    if(now.getHours() >= item.display_time.hours[0] && now.getHours() <= item.display_time.hours[1])
    {
        isValidHour = true;
    } 


    return isValidDate && isValidDay && isValidHour;
}
$(document).ready(function(){

    const texts = document.querySelectorAll('.text');
    const images = document.querySelectorAll('.image')

    //set an interval of 3 seconds
    setInterval(()=>{

        //set all the images and texts fields to empty
        texts.forEach(item => item.innerText = '');
        images.forEach(image => image.src = '');
        
        let messagesToDisplay = messages.filter(checkIfDateIsValid); // array of all messages that valid date (match to current time)
        i = (i+1) % messagesToDisplay.length ;
        document.querySelector('.card-holder').className = 'card-holder ' + 'card' + messagesToDisplay[i].template + " mb-3";
        document.querySelector('.images-container').className = 'images-container ' + 'images-' + messagesToDisplay[i].template;
        document.querySelector('.texts-container').className = 'texts-container ' + 'text-fields-' + messagesToDisplay[i].template;
        messagesToDisplay[i].text_lines.map((text,index) => { 
            texts[index].innerText = text;
            //console.log(texts[index]);
        });
        messagesToDisplay[i].pics.map((imgUrl,index) => { 
            images[index].src = imgUrl;
        });
    },3000); 
})
