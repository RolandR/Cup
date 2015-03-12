
function main() {
    var outline = polygon([
        [10,20]
       ,[11,15]
       ,[11,10]
       ,[10,5]
       ,[7, 0]
       
       ,[0, 2]
       ,[0, 20]
    ]);
    
    outline = rotate_extrude({ fn: 8 }, outline);
    
    return outline;
}
