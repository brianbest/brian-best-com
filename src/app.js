import component from "./component";

//Images
import item from './images/item.png';

//Styles
import './styles/style.scss';

document.body.appendChild(component());


const img = document.createElement('img');
img.src = item;
document.body.appendChild(img);
