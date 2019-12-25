const list_data = {
  Dishes:   {
        title:"Dishes", 
        data:[
            {
                imageUrl : {
                    uri: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:0, 
                liked:'1', 
                dish_name:"Thi beef fried rice", 
                rating:5, 
                reviews:"25"
            }, 
            {
                imageUrl : {
                    uri: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:1,
                liked:'0', 
                dish_name:"Fried Potato chips", 
                rating:3, 
                reviews:"25"
            }, 
            {
                imageUrl : {
                    uri:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:2,
                liked:'1', 
                dish_name:"Thi beef fried rice", 
                rating:4.5, 
                reviews:"20"
            }, 
            {
                imageUrl:{
                    uri: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:3,
                liked:'1', 
                dish_name:"Fried Potato chips", 
                rating:5, 
                reviews:"25"
            },
             {
                imageUrl : {
                    uri:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:4,
                liked:'1', 
                dish_name:"Thi beef fried rice", 
                rating:4.5, 
                reviews:"20"
            }
        ]
    }, 
   Categories:  {
        title:"Food Categories", 
        data:[
            {
                id:0,
                name:"Breakfast",
                item:8, 
                icon: require('../assets/images/bread.png')
            }, 
            {
                id:1,
                name:"Lunch",
                item:5, 
                icon: require('../assets/images/bread.png')
            },
            {
                id:2,
                name:"Snacks",
                item:9, 
                icon: require('../assets/images/bread.png')
            },
            {
                id:3,
                name:"Dinner",
                item:7, 
                icon: require('../assets/images/bread.png')
            }
        ]
    },
    Popular:  {
        title:"Our Popular Items", 
        data:[
            {
                imageUrl : {
                    uri: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:0,
                liked:'1', 
                dish_name:"Thi beef fried rice", 
                rating:"5", 
                reviews:"25"
            }, 
            {
                imageUrl : {
                    uri: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:1,
                liked:'0', 
                dish_name:"Fried Potato chips", 
                rating:"5", 
                reviews:"25"
            }, 
            {
                imageUrl : {
                    uri:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:2,
                liked:'1', 
                dish_name:"Thi beef fried rice", 
                rating:"4.5", 
                reviews:"20"
            }, 
            {
                imageUrl:{
                    uri: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }, 
                id:3,
                liked:'1', 
                dish_name:"Fried Potato chips", 
                rating:"5", 
                reviews:"25"
            }
        ]
    }
}

export default list_data; 