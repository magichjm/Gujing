function login() {
				let name = document.getElementById('name').value;
				if (!name) {
					alert('还未输入用户名');
					return false;
				} else {
				    if(!document.getElementById("check").checked){
                		alert("你必须同意协议");
                		return false}
                		else
                		{
                							alert('注册成功，默认密码为5201314~');
                        					location.href = "entry.html"
                		}
					}

				}