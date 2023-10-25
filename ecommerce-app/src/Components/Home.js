import {Component} from 'react'

import CartContext from './cartContext';

import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from "react-icons/ai";

import { BsCurrencyRupee } from "react-icons/bs";

import Item from './Item'

import TabItem from './TabItem'

import {v4 as newid} from 'uuid'

import './Home.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  {tabId: 'Fashion', displayText: 'Fashion'},
  {tabId: 'Electronics', displayText: 'Electronics'},
  {tabId: 'Furniture', displayText: 'Furniture'},
  {tabId: 'Others', displayText: 'Others'},
]

const appsList = [
  {
    appId: newid(),
    appName: 'T-shirt',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X0rcNRRNItEK06oq9-4lMwHaIw%26pid%3DApi&f=1&ipt=2ee606d06c96f58609a3ec053f7a675614a1c4c709c3b1183aedf341f70dc61f&ipo=images',
    category: 'Fashion',
    price:599
  },
  {
    appId: newid(),
    appName: 'Pant',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.tn5GN%252bwQBbt6Y7N2WSQ4cw%26pid%3DApi&f=1&ipt=874003da464723c36c976019a4f658d9c306e61e1434b57fe8f3df5417c2a2fe&ipo=images',
    category: 'Fashion',
    price:450
  },
  {
    appId: newid(),
    appName: 'Frock',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7ECOnUawom6JQO09uo8UogHaJ4%26pid%3DApi&f=1&ipt=eca8558db21f0674498345c9a7b1187e09a3321c734ec829637ef66bd78176c8&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8XEpZGAELtNRVRLUh3KpxAHaKT%26pid%3DApi&f=1&ipt=ff5b0ffdeed9dfd1f5e0e4c6b1227df03cb4313b4eb4da0ee4c2308a9dbd0e27&ipo=images',
    category: 'Fashion',
    price:789
  },
  {
    appId: newid(),
    appName: 'Suit',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8XEpZGAELtNRVRLUh3KpxAHaKT%26pid%3DApi&f=1&ipt=ff5b0ffdeed9dfd1f5e0e4c6b1227df03cb4313b4eb4da0ee4c2308a9dbd0e27&ipo=images',
    category: 'Fashion',
    price:4999
  },
  {
    appId: newid(),
    appName: 'Saree',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lf8IZcrnqkQiku0SLgqsXAHaIr%26pid%3DApi&f=1&ipt=7268b6157fcb9f1751884e4100c9615a481abc10cbd3e0520175e3f567d621c3&ipo=images',
    category: 'Fashion',
    price:4500
  },
  {
    appId: newid(),
    appName: 'Short',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AJ3_L1aMcOmgxR1yElGkUAHaHa%26pid%3DApi&f=1&ipt=dcf025765126148f614f815dfcbd791a91fcff12c33177b5651a8291d2667da8&ipo=images',
    category: 'Fashion',
    price:499
  },
  {
    appId: newid(),
    appName: 'Shirt',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8w6LI2__NeTnHkQo2AgyTAHaJM%26pid%3DApi&f=1&ipt=639e51f39b833a950eae5f506f483b41219335be4ab10a35985bf6f93abeb481&ipo=images',
    category: 'Fashion',
    price:1500
  },
  {
    appId: newid(),
    appName: 'Dress',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uKYgfqaljPLmCJC9BxPKGwHaIq%26pid%3DApi&f=1&ipt=e26f24d06893aae61d56166de8582d6c751319cd36e29daadbbecc888c75205f&ipo=images',
    category: 'Fashion',
    price:1279
  },
  {
    appId: newid(),
    appName: 'Shirt & Pant',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SvLJxzUu5MqexVs4cF2pjgHaKT%26pid%3DApi&f=1&ipt=72029c2592b4c5ee94e4263903968a2f628df9dc65dc598ef80bf59492c65fd0&ipo=images',
    category: 'Fashion',
    price:2150
  },
  {
    appId: newid(),
    appName: 'Wedding Dress',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-qd77HpxlL76i4ObiIHRvAHaKZ%26pid%3DApi&f=1&ipt=4af9e06505136b2e16c5b9a0632ba18768189c697409daa760888391d78dd9ca&ipo=images',
    category: 'Fashion',
    price:3989
  },
  {
    appId: newid(),
    appName: 'Laptop',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E5YfX9KpZnxQoHbTJHQJwAHaEy%26pid%3DApi&f=1&ipt=ca06d9ed09c60e93029851e76a7fd595293c0c5b063ced05b689f076a405c301&ipo=images',
    category: 'Electronics',
    price:54549
  },
  {
    appId: newid(),
    appName: 'Mobile',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NVH0ZQ8KV7Wzv90sc_USJQHaMc%26pid%3DApi&f=1&ipt=4e9e4beff62aa131f5de6d03c7b7195ab0614e4e0fd2f137fb17b12bc51a5cc7&ipo=images',
    category: 'Electronics',
    price:10569
  },
  {
    appId: newid(),
    appName: 'Bluetooth',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.xm__36Kn1ZRdPh5OmZTDBAHaHa%26pid%3DApi&f=1&ipt=0b6e2e73a3382f3a33b30599d198807df016b3436c3924f8d9625aac5ed7e1ed&ipo=images',
    category: 'Electronics',
    price:1256
  },
  {
    appId: newid(),
    appName: 'Charger',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._fDCiE27lhZYbz_Ep0cx_gHaHa%26pid%3DApi&f=1&ipt=e2d7ae1230156ca521c679dff7f2579db345691f68c338af7351f9311a7a4c1e&ipo=images',
    category: 'Electronics',
    price:350
  },
  {
    appId: newid(),
    appName: 'Mouse',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yQge4Uuych8ldbHE7OoDxwHaHa%26pid%3DApi&f=1&ipt=f0588c2b154ad5b22c34039ea46d445900ed495f99b399318d2f9d650fbb9281&ipo=images',
    category: 'Electronics',
    price:850
  },
  {
    appId: newid(),
    appName: 'Speaker',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vvtbNqAe3khcPs_YuQT5pwHaOi%26pid%3DApi&f=1&ipt=d6ec4782ea10d7443459ecca95b89aec33b26d6c7a5b85190bba4906aa680729&ipo=images',
    category: 'Electronics',
    price:2100
  },
  {
    appId: newid(),
    appName: 'Tab',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.k3S8tFZs5rFOkGXeDK7idAHaFA%26pid%3DApi&f=1&ipt=67b8d25a7f34ddfb6ca724c9005527a119e3a40957bb3576b7e36b7a6a11afd5&ipo=images',
    category: 'Electronics',
    price:15984
  },
  {
    appId: newid(),
    appName: 'Head Set',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SbMbBHR_O2-u6wrihNYZ2gHaHa%26pid%3DApi&f=1&ipt=27ff48a26fb3dbecdc852f2d3cac3821f21c33b4f2a048e5afe71282e3bd9be3&ipo=images',
    category: 'Electronics',
    price:989
  },
  {
    appId: newid(),
    appName: 'Shaver',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vIlACgeBu3Vg2tB-C2sfEgHaHa%26pid%3DApi&f=1&ipt=d6247465f04b357b081c28cfa89e755da68904bfbf06e159332720f21cfeed36&ipo=images',
    category: 'Electronics',
    price:749
  },
  {
    appId: newid(),
    appName: 'Projecter',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RZ1GTvRy6aR4abYnVbMjOgHaHa%26pid%3DApi&f=1&ipt=5a6c21aad2302086efff7413011238973d358b733668ad0a2d7b21bb636854be&ipo=images',
    category: 'Electronics',
    price:8520
  },
  {
    appId: newid(),
    appName: 'TV',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Lr7Ixov0GwIGs9Z_Qpt41AAAAA%26pid%3DApi&f=1&ipt=6355509dfb79d41745eed7a9819026c794e80283926cd36ec0217f8fbdcb5ca3&ipo=images',
    category: 'Furniture',
    price:15489
  },
  {
    appId: newid(),
    appName: 'Washing Machine',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.riELjPS0uOYXMkvsjWxyeQHaI-%26pid%3DApi&f=1&ipt=2cb40d607437d8312bb597f898aa81982c9c9ab7c5df6510cafd50cf1abe9814&ipo=images',
    category: 'Furniture',
    price:44591
  },
  {
    appId: newid(),
    appName: 'Fridge',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6MX5Eev7DaLRGkBV2xZSCwHaG1%26pid%3DApi&f=1&ipt=18e4dded5745e0d83e34a3795794ed2ac40e03ee386f956d65f59ecb7b7c1991&ipo=images',
    category: 'Furniture',
    price:17458
  },
  {
    appId: newid(),
    appName: 'Clock',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-G1E8GCzXyG3aAi7DDtitgHaHa%26pid%3DApi&f=1&ipt=89a800f6ab79adf2a9bf215610e1e9ec664239101fafc11b6218d04e95ff2dbe&ipo=images',
    category: 'Furniture',
    price:845
  },
  {
    appId: newid(),
    appName: 'Sofa',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TizgmrV4EQ0bqINFk5gCAAHaEf%26pid%3DApi&f=1&ipt=1c16cdf5232531b5d655467831a8bc1fcefa65bbac5c4ad9e5b4197bae49e1ad&ipo=images',
    category: 'Futniture',
    price:5489
  },
  {appId:newid(),
    appName:'Sofa',
    imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TizgmrV4EQ0bqINFk5gCAAHaEf%26pid%3DApi&f=1&ipt=1c16cdf5232531b5d655467831a8bc1fcefa65bbac5c4ad9e5b4197bae49e1ad&ipo=images',
    category:'Furniture',
    price:4591
  },
  {
    appId: newid(),
    appName: 'Kitchen',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pna3Q2f0kTM2XA2wOV-X9AHaHd%26pid%3DApi&f=1&ipt=715e348ff897158134e1b43287becc7d957d5c9faf34b286eb2a07d23eb9b864&ipo=images',
    category: 'Furniture',
    price:30594
  },
  {
    appId: newid(),
    appName: 'Cooker',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OKd6XVA1RCmxOMwydIBI2QHaF7%26pid%3DApi&f=1&ipt=7485daced1c6816185f1b79278a4d72ac329c0a51b95bef15234e9948e54ed41&ipo=images',
    category: 'Furniture',
    price:5894
  },
  {
    appId: newid(),
    appName: 'Table',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5ybg9nCG_oji7LcP6rg1owHaGM%26pid%3DApi&f=1&ipt=a4e5ed4d86387e03a7850aa5733943bd87de01a62493a0bec042be9c17ae6c60&ipo=images',
    category: 'Furniture',
    price:14859
  },
  {
    appId: newid(),
    appName: 'Bag',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hUNJrJ20dJvb6xwWruNRqgHaHa%26pid%3DApi&f=1&ipt=5567a254deae6b11d8ea8ed21768a74c3c89ca3926144e2388a7602b72a7aed3&ipo=images',
    category: 'Furniture',
    price:3594
  },
  {
    appId: newid(),
    appName: 'Lamp',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TU5A1b_2vldXONmksc_lcgHaKF%26pid%3DApi&f=1&ipt=7345be9d470dff0fdfa5a0a2778931b5ace1a6715011c491ca4ae7f95ae2c87a&ipo=images',
    category: 'Furniture',
    price:564
  },
  {
    appId: newid(),
    appName: 'Cricket Kit',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OUFTPxgfBdgXfn3XO2dB4wHaFE%26pid%3DApi&f=1&ipt=877f8391e2023d917f339df2edd38bf0a1fb105db4c722000475af8b73f8f798&ipo=images',
    category: 'Others',
    price:5648
  },
  {
    appId: newid(),
    appName: 'Books',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.33wXhDYyybHt-wiQqKbymQHaLW%26pid%3DApi&f=1&ipt=ecc36ed02f86c5b73642c1706081d3a7c115ae2663ecac9bece40f3d2eafe16a&ipo=images',
    category: 'Others',
    price:356
  },
  {
    appId: newid(),
    appName: "Dry Fruits",
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S6Wb2e9ADVKIcd4rKBxsBgHaH5%26pid%3DApi&f=1&ipt=75c0fd457751df996eea3acb13f1d6517e82f882202808afc3e6b7d65d9af16d&ipo=images',
    category: 'Others',
    price:478
  },
  {
    appId: newid(),
    appName: 'Helmet',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dsZ3A-yNZl1ddq6bP6QviwHaHa%26pid%3DApi&f=1&ipt=d3d9966ff40886020fdc52d7866c35dd65925d95ced0cd055e5af5e7df0f4534&ipo=images',
    category: 'Others',
    price:458
  },
  {
    appId: newid(),
    appName: 'Bottle',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hXQHszrLeLb2gcdG43IFZgHaFc%26pid%3DApi&f=1&ipt=6e0a090553e7d000dfc2b72e42973b070eaa08bd9dde8da9cc854af667f8aad5&ipo=images',
    category: 'Others',
    price:945
  },
  {
    appId: newid(),
    appName: 'Box',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6KGGFBfO8z7G-e_ewVbgNAHaHa%26pid%3DApi&f=1&ipt=5ed70645fab4fad6d79e4ab667bdcc5cfa8d9bac730f5af2e2fc3bdd267ba07f&ipo=images',
    category: 'Others',
    price:400
  },
  {
    appId: newid(),
    appName: 'Grocery',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WuymIvWM41yvTEIgahwLewHaE9%26pid%3DApi&f=1&ipt=8678b48f325e5e81bf03acf529f4146d5ba767fd9c3a84c0fc7c1d584f1b4611&ipo=images',
    category: 'Others',
    price:2465
  },
  {
    appId: newid(),
    appName: 'calculator',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8xE9yj4JQzJTlWrCCAQMYgHaHa%26pid%3DApi&f=1&ipt=895d918e03416071d0403d6e2abb0cca21b4ffcd70c78473d8948682e77f8b5e&ipo=images',
    category: 'Others',
    price:547
  },
  {
    appId: newid(),
    appName: 'Mat',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5h2H8WmIodRhFNx9d45DGAHaFT%26pid%3DApi&f=1&ipt=4e8963e5abcb068a79a156701cf1b41e87e22bbcffe11a89ead4f6aa1a31455d&ipo=images',
    category: 'Others',
    price:259
  },
  {
    appId: newid(),
    appName: 'Tablets',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YMRnq9SIOuw4aKThJpDyywHaE7%26pid%3DApi&f=1&ipt=a647b948fe252b9e811da05731331cd48e0e456efdd64cf08732c1050b772e01&ipo=images',
    category: 'Others',
    price:359
  },
]
  


class Home extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,popup:false,name:'',url:'',cash:'',quantity:1,cartItems:{}
      
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  Closepop=()=>{
    this.setState((prev)=>({popup:!prev.popup}))
  }

  DecreseQuantity=()=>{
    const {quantity}=this.state
    if (quantity!==1){
      this.setState((prev)=>({quantity:prev.quantity-1}))
    }
  }

  IncreseQuantity=()=>{
    
    
    this.setState((prev)=>({quantity:prev.quantity+1}))
  }
 

  Detail=(Details)=>{
    const {appName,imageUrl,price}=Details
    this.setState({name:appName,url:imageUrl,cash:price})
    this.setState((prev)=>({popup:!prev.popup}))

  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId,popup,name,url,cash,quantity} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)
   
      return(
        
          
      <div className="app-container">
       
        <div className="app-store">
          <h1 className="heading">Ecommerce Website</h1>
          <div className='container'>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />

            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          
          <Link to="/cart">
          <AiOutlineShoppingCart className='cart-icon'/></Link>
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
                 />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <Item key={eachApp.appId} appDetails={eachApp} popup={this.Detail} />
            ))}
          </ul>
        </div>
        {popup && <div className="popup">
          <div className="popup-content">
          
          <div className='card'>
            <div>
            <p className='pop-para'>{name}</p>
            <p>Shop the trends, own the style. Your one-stop destination for all things fabulous!</p>
            <div className='cash-card'>
            <BsCurrencyRupee/>
            <p>{cash}</p></div>
            <div className='quantity-card'>
            <p>Quantity :</p> 
             <button className='quantity-button' onClick={this.DecreseQuantity}>-</button>
              <p className='quantity-para'>{quantity}</p>
              <button className='quantity-button' onClick={this.IncreseQuantity}>+</button>
            </div>
            <CartContext.Consumer>
            {(value)=>(
            <button className='cart-button' onClick={()=>value.addCartItem(name,url,cash,quantity)}>Add to Cart</button>
            )}</CartContext.Consumer>
            </div>
           <img src={url} alt='url' className='logo'/>
           
            </div> 
            <button onClick={this.Closepop} className='pop-button'>X</button></div>          
          </div>}
           </div>
        )
        }
}

export default Home
