onmessage = function(e) {
    
    var res = 'Result: ' + (Number(e.data[0]) + Number(e.data[1]));
    postMessage(res);
  }