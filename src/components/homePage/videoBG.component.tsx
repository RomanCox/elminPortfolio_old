import {
	VideoBGContainerStyled,
	BlackoutStyled,
	VideoBGStyled,
} from './homePage.styled.ts';

export const VideoBG = () => {

	return (
		<VideoBGContainerStyled>
			<VideoBGStyled width='100%' height='100%'
					src='https://www.youtube.com/embed/KBeyL0i1cJw?mode=opaque&wmode=transparent&autoplay=1&loop=1&controls=0&modestbranding=0&rel=0&autohide=1&showinfo=0&color=white&iv_load_policy=2&theme=light&&mute=1'
					// src='https://www.youtube.com/embed/j4he5fTv5N0?mode=opaque&wmode=transparent&autoplay=1&list=PLQ2pecoJpKwfUI_pYOxn8FDDfybRPs7Ni&loop=1&controls=0&modestbranding=0&rel=0&autohide=1&showinfo=0&color=white&iv_load_policy=2&theme=light&mute=1'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop;'
					allowFullScreen></VideoBGStyled>
			<BlackoutStyled/>
		</VideoBGContainerStyled>
	);
};