function solution(sizes) {
    var answer = 0;
    var first = 0
    var second = 0 //w h 중에 작은 것중 가장 큰 것
    
    for(var i=0; i<sizes.length; i++) {
        if(sizes[i][0]>=sizes[i][1]){
            if(second < sizes[i][1]) second = sizes[i][1]
        } else {
            if(second < sizes[i][0]) second = sizes[i][0]
        }
        for(var k=0; k<2; k++) {
            if(first<sizes[i][k]){
                first = sizes[i][k]
            }                
        }
    } 
    answer=first*second
        
    return answer;
}