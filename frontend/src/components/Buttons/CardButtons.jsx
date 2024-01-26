import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink, blue, green } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


   
    

export const HeartButton = () => {
    const [ liked, setLiked ] = useState(false);
  return (
    <button onClick={() => setLiked((prevState) => (!prevState))}>
{!liked ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{ color: pink[500] }} />}

</button>
  )
}



export const ShareButton = () => {
    const [shared, setShared ] = useState(false);
    return (
        <button onClick={() => setShared((prevState) => (!prevState))}>
        {!shared ? <ShareIcon /> : <ShareIcon sx={{ color: blue[500] }} />}
        </button>
    )
  }
  



  export const AddToCartBtn = () => {
    const [inCart, setInCart ] = useState(false);
    return (
        <button onClick={() => setInCart((prevState) => (!prevState))}>
        {!inCart ? < ShoppingCartCheckoutIcon/> : <ShoppingCartIcon sx={{ color: green[500] }} />}
        </button>
    )
  }


