<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# websaite#: http://ogp.me/ns/ websaite#">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width">
	<title>目標達成キャンプ｜アブキャリU-26</title>
	<!-- ↓キャッシュさせないメタタグ -->
	<meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-cache">
	<!-- ↑キャッシュさせないメタタグ -->
	<meta property="og:url" content="https://abron.co.jp/camp/"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="目標達成キャンプ｜アブキャリU-26" />
  <meta property="og:description" content="26歳以下限定1泊2日、都会から少し離れた田舎の古民家で行う、合宿型目標達成プログラム。変化の時代で生き抜くために、新しい挑戦への一歩を確実に踏み出そう。"/>
  <meta property="og:site_name" content="目標達成キャンプ｜アブキャリU-26｜公式ページ"/>
  <meta property="og:image" content="https://abron.co.jp/camp/resources/images/Share/OGP.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
	<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/resources/styles/Pages/reset.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/resources/vendor/swiper/css/swiper.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/resources/styles/Pages/header.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/resources/styles/Pages/footer.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri() ?>/resources/styles/Pages/form.css">
	<link rel="icon" type="image/x-icon" href="<?= get_template_directory_uri() ?>/favicon.ico">
	<link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon-180x180.png">
</head>
<body>
	<div class="Page">
		<main class="Main">
      <div class="Form" id="Form">
        <div class="Form-Inner">
					<div class="HeadLine">
						<h2 class="HeadLine-Text">お問い合わせ</h2>
					</div>
					<form action="#Form" method="post" class="Form-Inner-ListGroup">
						<?php echo do_shortcode('[contact-form-7 id="50" title="お問い合わせフォーム"]'); ?>
					</form>
				</div>
			</div>
		</main>
    <?php get_footer(); ?>
