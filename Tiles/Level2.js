(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level2",
{ "compressionlevel":-1,
 "height":15,
 "infinite":false,
 "layers":[
        {
         "data":[153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
            153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 153, 191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 153,
            153, 0, 0, 0, 0, 0, 0, 0, 0, 104, 104, 104, 0, 153, 104, 92, 0, 160, 0, 0, 0, 0, 0, 0, 82, 65, 153,
            153, 0, 0, 0, 0, 0, 191, 0, 0, 153, 0, 0, 0, 153, 0, 0, 0, 10, 0, 0, 0, 0, 0, 116, 104, 104, 153,
            153, 0, 0, 0, 0, 0, 104, 104, 104, 153, 0, 0, 0, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
            153, 0, 0, 161, 0, 0, 0, 0, 0, 153, 0, 0, 116, 153, 0, 10, 0, 0, 0, 0, 0, 0, 161, 0, 0, 0, 153,
            153, 104, 104, 104, 0, 0, 0, 0, 0, 153, 0, 0, 0, 153, 0, 0, 0, 0, 0, 0, 0, 116, 92, 0, 0, 0, 153,
            153, 0, 0, 0, 0, 0, 0, 0, 160, 153, 0, 0, 0, 153, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 153,
            153, 0, 0, 0, 0, 0, 104, 104, 104, 153, 92, 0, 0, 153, 0, 0, 0, 0, 0, 0, 161, 0, 0, 0, 0, 0, 153,
            153, 191, 0, 0, 0, 0, 0, 0, 0, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 92, 0, 0, 0, 0, 0, 153,
            153, 104, 104, 92, 0, 0, 0, 0, 0, 153, 0, 0, 161, 0, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
            153, 0, 0, 0, 0, 0, 0, 0, 161, 153, 0, 0, 116, 104, 104, 104, 104, 92, 0, 0, 0, 0, 0, 0, 0, 0, 153,
            153, 0, 0, 0, 0, 0, 116, 104, 104, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
            153, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153,
            153, 104, 104, 104, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 153],
         "height":15,
         "id":1,
         "name":"Map",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":27,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 0,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 158, 158, 158, 0, 158, 158, 158, 0, 0, 0, 0, 0, 0, 0, 0, 157, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 0, 158, 0, 0, 0, 158, 0, 0, 0, 0, 0, 158, 158, 158, 158,
            158, 0, 0, 0, 0, 0, 158, 158, 158, 158, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 158, 158, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 158, 158, 158, 0, 0, 0, 0, 0, 158, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 158, 158, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 0, 158, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 158, 158, 158, 0, 158, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158, 158, 0, 0, 0, 0, 0, 158,
            0, 158, 158, 158, 0, 0, 0, 0, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 158, 0, 0, 158, 158, 158, 158, 158, 158, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 158, 158, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158,
            0, 158, 158, 158, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 0],
         "height":15,
         "id":2,
         "name":"Collision",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":27,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":70,
 "tilesets":[
        {
         "firstgid":1,
         "source":"tiles_spritesheet.tsx"
        }, 
        {
         "firstgid":157,
         "source":"Exit.tsx"
        }, 
        {
         "firstgid":158,
         "source":"collision.tsx"
        }, 
        {
         "firstgid":159,
         "source":"death.tsx"
        }, 
        {
         "firstgid":160,
         "source":"mushroomRed.tsx"
        }, 
        {
         "firstgid":161,
         "source":"plant.tsx"
        }, 
        {
         "firstgid":162,
         "source":"items_spritesheet.tsx"
        }],
 "tilewidth":70,
 "type":"map",
 "version":"1.9",
 "width":27
});