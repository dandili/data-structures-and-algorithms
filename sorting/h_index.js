var hIndex = function(citations) {
    citations.sort((a,b)=>b-a)
    for(i=0;i<citations.length;i++){
        if(citations[i]<i+1) return i
    }
    return i
};

var papers = [1, 4, 2, 5, 6, 3, 5];

hIndex(papers);