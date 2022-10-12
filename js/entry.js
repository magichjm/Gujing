function login() {
				let user = document.getElementById('user1').value;
				let pass = document.getElementById('pass1').value;
				if (!user) {
					alert('还未输入账号');
					return false;
				} else {
					if (!pass) {
						alert('还未输入密码');
						return false;
					}
					else{
					    if(pass!=5201314)
					    {
					       alert('密码错误');
					       return false;
					    }
					     else{
					     alert('登陆成功');
                         					location.href = 'https://www.douyin.com/'
					     }
					}
					}
				}