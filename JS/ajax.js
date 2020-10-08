function ajax(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        callback(data);
    }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
  export default ajax;