const STUDENTS = [
  {
    slack: "avramenko-vitaliy",
    name: "Авраменко Виталий ",
    avatar: "https://github.com/Avramenko-Vitaliy.png",
    location: "Днепр",
    github: "https://github.com/Avramenko-Vitaliy",
    facebook: "https://www.facebook.com/profile.php?id=100001989148008",
    email: "vitaliy.avramenko@ardas.biz"
  },
  {
    slack: "a_viktor",
    name: "Ананьев Виктор ",
    avatar: "https://github.com/avikbox.png",
    github: "https://github.com/avikbox",
    facebook: "https://www.facebook.com/avikbox",
    email: "artbox54@yandex.ru"
  },
  {
    slack: "bah_kostya",
    name: "Багинский Константин ",
    avatar: "https://github.com/bahkostya.png",
    github: "https://github.com/bahkostya",
    facebook: "https://www.facebook.com/bah.kostya",
    email: "bah.kostya@gmail.com"
  },
  {
    slack: "igor.valashov ",
    name: "Валашов Игорь ",
    location: "Днепр",
    avatar: "https://github.com/gl4u.png",
    github: "https://github.com/gl4u",
    facebook: "https://www.facebook.com/profile.php?id=100014280665346",
    email: "igor.valashov@ardas.dp.ua"
  },
  {
    slack: "juff",
    name: "Войцеховский Владимир",
    avatar: "https://github.com/juffik.png",
    github: "https://github.com/juffik",
    facebook: "https://www.facebook.com/Juffik",
    email: "vladimir.voytsekhovskiy@gmail.com"
  },
  {
    slack: "vlad-vorontsov",
    name: "Воронцов Владислав",
    avatar: "https://github.com/vlad-vorontsov.png",
    github: "https://github.com/vlad-vorontsov",
    facebook: "https://www.facebook.com/vladyslav.vorontsov",
    email: "wr-vlad@yandex.ru"
  },
  {
    slack: "gregorynative",
    name: "Галушка Григорий ",
    avatar: "https://github.com/GregoryNative.png",
    github: "https://github.com/GregoryNative",
    facebook: "https://www.facebook.com/profile.php?id=100003913403695",
    email: "opengeeklabgg@gmail.com "
  },
  {
    slack: "igorgripas",
    name: "Грипас Игорь ",
    location: "Днепр",
    avatar: "https://github.com/igorgripas.png",
    github: "https://github.com/igorgripas",
    facebook: "https://www.facebook.com/profile.php?id=100001830881043",
    email: "igor.gripas@ardas.dp.ua"
  },
  {
    slack: "-",
    name: "Грушко Александр",
    avatar: "https://github.com/AleksanderGruszko.png",
    github: "https://github.com/AleksanderGruszko",
    facebook: "https://www.facebook.com/multiclon",
    email: "alexander.a.grushko@gmail.com"
  },
  {
    slack: "yes",
    name: "Єфремова Світлана ",
    avatar: "https://github.com/svitlanaiefremova.png",
    github: "https://github.com/svitlanaiefremova",
    facebook: "https://www.facebook.com/yefremova.svetlana",
    email: "yefremovasveta@gmail.com"
  },
  {
    slack: "andreykalashnik",
    name: "Калашник Андрей",
    avatar: "https://github.com/AndreyKalashnik.png",
    github: "https://github.com/AndreyKalashnik",
    facebook: "https://www.facebook.com/andrey.kalashnik.167",
    email: "kalashnik.a.p@gmail.com"
  },
  {
    slack: "mrhidalgo",
    name: "Коваленко Андрей",
    avatar: "https://github.com/MrHidalgo.png",
    github: "https://github.com/MrHidalgo",
    facebook: "https://www.facebook.com/profile.php?id=100001475119295",
    email: "hkovalenko9@gmail.com"
  },
  {
    slack: "-",
    name: "Коваль Юрий",
    avatar: "https://github.com/-.png",
    github: "https://github.com/-",
    facebook: "-",
    email: "koval.iurii@gmail.com"
  },
  {
    slack: "dimondevs",
    name: "Ковальцов Дмитрий",
    avatar: "https://github.com/dimondevs.png",
    github: "https://github.com/dimondevs",
    facebook: "https://www.facebook.com/profile.php?id=100001778929516",
    email: "dimondevs@gmail.com"
  },
  {
    slack: "alukos",
    name: "Костюшин Александр",
    avatar: "https://github.com/alukos.png",
    github: "https://github.com/alukos",
    facebook: "https://www.facebook.com/mr.alukos",
    email: "alukos@yandex.ru"
  },
  {
    slack: "kryvunroman",
    name: "Кривун Роман ",
    avatar: "https://github.com/KryvunRoman.png",
    github: "https://github.com/KryvunRoman",
    facebook: "https://www.facebook.com/roman.kryvun",
    email: "kryvun.roman@gmail.com"
  },
  {
    slack: "alexpoltava",
    name: "Омельченко Олександр",
    avatar: "https://github.com/alexpoltava.png",
    github: "https://github.com/alexpoltava",
    facebook: "https://www.facebook.com/profile.php?id=100014071297260",
    email: "a.n.omelchenko@icloud.com"
  },
  {
    slack: "fr3ud",
    name: "Павелко Александр",
    avatar: "https://github.com/Fr3ud.png",
    github: "https://github.com/Fr3ud",
    facebook: "https://www.facebook.com/alexander.pavelko.31",
    email: "oo.pavelko@gmail.com"
  },
  {
    slack: "alexpanich",
    name: "Паниченко Александр",
    avatar: "https://github.com/AlexPanich.png",
    github: "https://github.com/AlexPanich",
    facebook: "https://www.facebook.com/profile.php?id=100004737421372",
    email: "nasada@yandex.ru"
  },
  {
    slack: "petruk-dmitriy",
    name: "Петрук Дмитрий ",
    avatar: "https://github.com/petruk-dmitriy.png",
    github: "https://github.com/petruk-dmitriy",
    facebook: "https://www.facebook.com/profile.php?id=100006725914841",
    email: "petrukdmytry@gmail.com"
  },
  {
    slack: "pyshchyk-o",
    name: "Пищик Оля",
    avatar: "https://github.com/pyshchyk-o.png",
    github: "https://github.com/pyshchyk-o",
    facebook: "https://www.facebook.com/olya.pischik",
    email: "olyapischik170496@gmail.com"
  },
  {
    slack: "web2ls",
    name: "Слободянский Алексей",
    avatar: "https://github.com/web2ls.png",
    github: "https://github.com/web2ls",
    facebook: "https://www.facebook.com/aslobodyansky",
    email: "web2ls@yandex.ru"
  },
  {
    slack: "raqushka",
    name: "Стригун Евгений",
    location: "Днепр",
    avatar: "https://github.com/raqushka.png",
    github: "https://github.com/raqushka",
    facebook: "https://www.facebook.com/profile.php?id=100007263397513",
    email: "yevhen.stryhun@ardas.biz"
  },
  {
    slack: "yurgenvoid",
    name: "Телятицкий Юрий",
    avatar: "https://github.com/yurgenvoid.png",
    github: "https://github.com/yurgenvoid",
    facebook: "https://www.facebook.com/yuri.telyatitsky",
    email: "yuri.retz@gmail.com"
  },
  {
    slack: "timchukd",
    name: "Тимчук Дмитрий ",
    avatar: "https://github.com/timchukd.png",
    github: "https://github.com/timchukd",
    facebook: "https://www.facebook.com/dmitriytimchuk",
    email: "fonenman@gmail.com"
  },
  {
    slack: "twin",
    name: "Якубович Дмитрий",
    avatar: "https://github.com/tsdv.png",
    github: "https://github.com/tsdv",
    facebook: "-",
    email: "developers@twinslash.com"
  },
  {
    slack: "fo0lman",
    name: "Ярчук Сергей ",
    avatar: "https://github.com/fo0lman.png",
    github: "https://github.com/fo0lman",
    facebook: "https://www.facebook.com/fo0lman",
    email: "foolman.sy@gmail.com"
  },
  {
    slack: "vladiliucov",
    name: "Filiucov Vlad",
    avatar: "https://github.com/VladFiliucov.png",
    github: "https://github.com/VladFiliucov",
    facebook: "https://www.facebook.com/feeliucov.vlad",
    email: "w4rmup1988@gmail.com"
  },
  {
    slack: "wentris71",
    name: "Khomych Roma ",
    avatar: "https://github.com/Wentris71.png",
    github: "https://github.com/Wentris71",
    facebook: "https://www.facebook.com/profile.php?id=100004608847454",
    email: "homich2013@list.ru"
  },
  {
    slack: "mcslayer",
    name: "Птущук Николай",
    avatar: "https://github.com/mcslayer.png",
    github: "https://github.com/mcslayer",
    facebook: "https://www.facebook.com/mcslayer",
    email: "mcslayer@yandex.ua"
  }
];

const Person = React.createClass({
  render() {
  const {
      slack,
      name,
      avatar,
      location,
      github,
      facebook,
      email
      } = this.props;

  const locationElement = location
      ? (
  <div className="location">
      <a href={`http://maps.google.com/?q=${location}`} target="blank">
      <i className="pin-icon"/>
      <span>{location}</span>
      </a>
      </div>)
: null;

  return (
      <div className="person">
      <div className="avatar">
      <img src={avatar}/>
      </div>
      <div className="info">
      <div className="name">{name}</div>
      {locationElement}
      <div className="socials">
      <a className="social-icon fa fa-facebook-official" href={facebook} target="blank"/>
      <a className="social-icon fa fa-github" href={github} target="blank"/>
      <a className="social-icon fa fa-envelope" href={`mailto:${email}`} target="_top"/>
    </div>
    </div>
    </div>
);
}
});

const MyGroup = React.createClass({
  getInitialState() {
  return {
    students: STUDENTS,
    search: ''
  }
},

handleSearchChange(e) {
  const searchStr = e.target.value;
  this.setState({
    search: searchStr,
    students: STUDENTS.filter(student => student.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)
});
},

render() {
  const {students} = this.state;

  return (
      <div>
      <div className="title">Meet React Course Members</div>
  <div className="search">
      Search:
<input placeholder="Search" value={this.state.search} onChange={this.handleSearchChange}/>
</div>

{
  students.map(person =>
<Person
key={person.name}
slack={person.slack}
name={person.name}
location={person.location}
avatar={person.avatar}
github={person.github}
facebook={person.facebook}
email={person.email}
/>)
}
</div>
);
}
});

ReactDOM.render(
<MyGroup />,
    document.getElementById('root')
);
