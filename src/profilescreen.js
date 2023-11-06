import './profilescreen.css';
import Header from './components/Header.js';
import Icon from './Ressources/Icons/Mail.png';
import UserImage from './Ressources/UserProfilePicture/UserImage.png'
import Infobox from './components/Infobox';
import Statistics from './components/Statistics';
import LibraryView from './components/LibraryView';
import view1 from './Ressources/Icons/View_Grid.png';
import view2 from './Ressources/Icons/View_List.png';
import mapIcon from './Ressources/Icons/Location.png';
import arrow from './Ressources/Icons/Chevron_down.png';


function profileScreen() {
  return (
    <div className="profilescreen-container">
      <Header
        IconPath={Icon}
      />
      <Infobox
        profileImage={UserImage}
        name="Anna Hansson 🇮🇸"
        mapIcon={mapIcon}
        location="ICELAND"
        arrow={arrow}
        text="Follow"
      />
      <Statistics
        statistic1="27"
        statistic2="20"
        statistic3="302"
        statistic4="507"
    />
     <LibraryView
        viewIcon1={view1}
        viewIcon2={view2}
      />
    </div>
  );
}


export default profileScreen;
