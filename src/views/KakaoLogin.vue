<template>
  <div>
    <a id="custom-login-btn" @click="KakaoLogin">
        <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="카카오 로그인 버튼"
        />
    </a>
  </div>
</template>

<script>

export default {
    methods: {
        KakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image, account_email',
                success: this.getKakaoAccount,
                fail: e => {
                    console.error(e);
                }
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: 'v2/user/me',
                success: res => {
                    const acc = res.kakao_account;
                    console.log(acc);
                    const params = {
                        email: acc.email,
                        nm: acc.profile.nickname,
                        profile_img: acc.profile.profile_img_url,
                        thumb_img: acc.profile.thumbnail_img_url,
                    }
                    console.log(params);

                    alert('success')
                },
                fail: e => {
                    console.error(e);
                }
            });
        }
    }
}
</script>

<style>

</style>