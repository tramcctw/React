import React from "react";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import withScoll from "./func/withScroll";
// import useScroll from "./func/useScroll";
import GuardRouter from "../导航守卫/GuardRouter";
import scrollRecover from "./func/common/scrollRecover";

function Page1() {
  return (
    <div className="page1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      veniam voluptatem ullam excepturi laboriosam. Quod nihil, vero corporis
      repellendus qui reiciendis blanditiis voluptas id architecto ut, ea quas
      porro numquam beatae possimus sint? Optio officiis voluptatum error
      facilis veniam fuga cupiditate itaque quo quas alias, voluptas neque
      dicta? Explicabo, similique, blanditiis sit quos delectus commodi vel
      aspernatur odit et recusandae tempora eaque rem saepe minus sapiente.
      Nulla atque dignissimos perspiciatis. Suscipit exercitationem labore
      ducimus voluptatibus voluptate veniam. Dignissimos corporis amet veritatis
      ipsam placeat eos, architecto assumenda numquam. Natus ratione tempore
      placeat nulla expedita repellat esse nihil amet minus animi numquam sed
      eum nesciunt reprehenderit ad et totam aut nemo iusto, iure at maxime.
      Asperiores, quia quaerat commodi saepe id repellendus odit tempore velit
      earum aspernatur? Odit sunt saepe facere vero deserunt eveniet doloremque
      labore mollitia sint, quia, corrupti debitis sequi ab similique qui
      laboriosam tenetur modi accusamus. Nam, dolorem veniam obcaecati
      temporibus recusandae, repellat incidunt porro nisi possimus vero omnis
      cupiditate quibusdam quidem facilis, iure sit? Ipsum fuga sint magni
      voluptatem reiciendis dolor tenetur. Ipsum consectetur rem mollitia
      facilis similique expedita quas, totam officiis magni culpa adipisci vitae
      quidem non deserunt beatae! Molestias repellat optio quasi magnam eum,
      nisi ipsum! Repudiandae sed velit soluta incidunt accusamus deleniti
      obcaecati explicabo quam itaque temporibus, nobis pariatur natus sint
      laboriosam iste. Rerum nulla eius sit hic ratione sunt dicta, dolorum
      ullam! Fuga tempora dolorum doloribus fugit perspiciatis. Quae, quasi
      ratione adipisci nulla ex illum esse hic earum recusandae autem commodi
      sit totam error sint molestias, incidunt inventore magnam dolores dolor
      officia optio. Quaerat consectetur nesciunt, sit perspiciatis quo dicta
      aperiam? Dolorem ipsam, consectetur sit at alias modi corporis voluptate
      veritatis beatae. Placeat, dolore? Nam ab eveniet quo! Libero eaque soluta
      deleniti, officiis odio sapiente eos. Veritatis dolor, reiciendis, vel
      numquam maxime cum iste inventore pariatur dolorem ex quos dicta
      repellendus eligendi? Illo inventore beatae dicta dignissimos quo dolorem
      molestias? Dolore voluptatum optio, possimus architecto voluptatem dolorem
      nihil autem itaque perferendis voluptate quo praesentium vero non quam nam
      atque tempore hic iste fugiat odio quae. Perferendis aperiam reprehenderit
      reiciendis suscipit ducimus accusantium magni est officia praesentium
      dicta in et quos illum, quidem impedit quasi dolor consectetur blanditiis
      harum fugiat dolores ullam delectus. Illum corrupti, iste molestiae nemo
      nam reiciendis dolore ducimus dolorum, vitae in deserunt nihil iure
      maiores quos debitis earum ullam expedita deleniti error ab ad neque
      magni? Mollitia temporibus reiciendis eaque maxime rerum unde dolor atque,
      veniam molestias cumque ratione doloremque ipsam voluptas officiis?
      Consectetur, labore distinctio maiores reiciendis eaque totam laboriosam
      fuga, iste provident sunt perferendis nemo rerum hic fugit aut explicabo
      qui ipsum! Eaque omnis sit ex quam molestiae culpa optio accusamus in
      voluptas quas, deleniti ducimus consectetur qui incidunt nisi, vero at
      unde nostrum voluptatem tempore autem placeat asperiores fuga aspernatur?
      Exercitationem, minus cumque placeat repellendus atque consequuntur fugit
      ullam facere? Labore, velit harum? Quaerat error aspernatur, id, quae ex
      voluptatum, exercitationem voluptas debitis rerum temporibus eum atque
      enim eius sint. Minima temporibus recusandae, nihil atque iure a similique
      doloremque laudantium eveniet qui provident possimus placeat illo
      corrupti. Omnis, nobis cum at beatae optio autem iure earum soluta hic
      quaerat pariatur aliquid blanditiis aliquam distinctio est fugiat
      reprehenderit enim tenetur deleniti quisquam iste cumque debitis iusto
      vel? Ad aliquid incidunt, cum fugit quam, doloribus exercitationem amet,
      dolores obcaecati assumenda aliquam quisquam dolorum neque! Quibusdam
      libero explicabo autem vero eaque, accusamus quos exercitationem maiores
      recusandae tempora itaque pariatur doloremque minus in nam molestias
      maxime quam hic reiciendis? Quae, recusandae? Quis voluptatibus error
      harum iusto sit alias nulla repellat fugiat nesciunt architecto laborum
      explicabo a, corporis veritatis corrupti! Corporis, nemo. Pariatur sunt
      asperiores iusto, dolore voluptatem commodi earum eius temporibus labore
      voluptatum nesciunt distinctio. Fugit accusamus eveniet numquam, modi hic
      excepturi aut natus delectus quas dignissimos voluptatum deserunt ullam
      totam nihil doloremque voluptatem voluptates, ex deleniti nostrum rem?
      Cumque accusamus aut tempora suscipit commodi pariatur non ea qui sapiente
      ipsam reiciendis nisi modi ex dignissimos maxime molestias recusandae
      magnam, voluptatum omnis repudiandae, quis consequuntur rem sint!
      Provident, possimus? Dolores illo laudantium fuga, excepturi eveniet quas
      nisi eum laborum, veritatis incidunt alias et, placeat sapiente similique?
      Voluptatum quod natus odit repellat ipsa, vitae recusandae, velit atque
      nobis dolorum inventore est. Voluptate, ab? Incidunt quo, a suscipit cum
      amet sit minima libero dignissimos possimus. Delectus minima saepe
      possimus iusto! Repudiandae aut, accusamus eos tempore facilis commodi
      fugiat cum doloremque excepturi sequi aliquam maiores et quisquam quaerat,
      placeat labore amet iure minima? Error sequi voluptates, numquam modi
      blanditiis aliquam cupiditate sit ratione quisquam. Quidem obcaecati magni
      nulla totam minima necessitatibus quisquam dolore aspernatur. Tempore
      alias minima cupiditate id est neque adipisci natus laboriosam voluptates
      ut voluptatum unde quam sed ipsam explicabo pariatur aliquid, quisquam
      distinctio. Nemo quidem necessitatibus in ea nesciunt impedit omnis,
      inventore neque eveniet hic officia quaerat assumenda. Delectus nisi,
      cumque similique tempore est eum culpa nesciunt odit in magnam veniam modi
      adipisci? Veniam minima quaerat necessitatibus ipsum! Dignissimos nisi
      officia atque numquam! Enim, autem quam iste quasi suscipit repellendus
      voluptatibus recusandae nisi ipsa rem! Ea fuga maiores nihil. Eum, odit
      harum ipsum placeat dolor inventore voluptas, repellendus, maxime facilis
      dolores eaque repudiandae sapiente fugit blanditiis nesciunt? Atque minus
      fugiat beatae neque sapiente nesciunt, quae esse cum, sunt voluptate,
      maxime illum laudantium architecto vitae recusandae? Laudantium ipsa
      necessitatibus ducimus, quod in, praesentium, vel nam maiores qui illum
      mollitia dignissimos nihil ratione? Vero eaque quasi dolores officiis
      obcaecati sed corrupti consectetur aliquam ad ducimus, quos, voluptatibus
      modi tenetur explicabo inventore? A dolorum fuga quibusdam voluptatum, sed
      asperiores, itaque quod repudiandae quisquam totam atque! Numquam fuga
      soluta mollitia vitae, nam, odio dolores tenetur eveniet, cupiditate
      repudiandae sunt pariatur. Impedit magni sunt doloribus eveniet, fuga
      pariatur ipsum voluptatibus! Quisquam, quidem libero laudantium qui rem
      nisi soluta eligendi deleniti reiciendis quibusdam saepe repudiandae
      delectus dolore eius. Libero repudiandae, dolore consectetur officia
      corporis sapiente! Possimus cum delectus fugit recusandae sit illum
      architecto rerum molestias voluptate nam aspernatur tempora sapiente,
      debitis praesentium esse dolore! Ullam odio architecto dicta sunt,
      repudiandae harum deleniti accusantium minus recusandae voluptate ipsa
      quisquam.
    </div>
  );
}

function Page2() {
  return (
    <div className="page2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod
      tempore distinctio assumenda dolore numquam alias obcaecati deleniti
      voluptatem, eveniet voluptas aut, temporibus quis porro dignissimos
      veritatis reprehenderit animi provident ipsa? Assumenda aut nesciunt
      incidunt voluptatem quos quisquam fugit exercitationem eum dignissimos.
      Necessitatibus sunt dolorum quis iure dolor molestiae doloribus esse
      tempora accusantium, dignissimos obcaecati explicabo adipisci delectus
      repudiandae cumque ullam provident unde, perferendis eveniet ab id sequi
      illo. Quae saepe quisquam perferendis incidunt soluta voluptates explicabo
      doloremque distinctio neque, animi quaerat illum suscipit? Soluta esse
      error eligendi. Modi in totam unde, consequuntur sed tempora nam est
      corrupti minima assumenda vitae et, quo, dolore repellat voluptatem vero a
      molestiae ex. Ut perspiciatis, dolor ad blanditiis exercitationem
      reprehenderit recusandae dicta id est earum, natus molestiae temporibus
      voluptate accusamus cum porro nam architecto nostrum facilis non aliquam.
      Doloribus numquam pariatur molestiae atque tempore porro officiis
      assumenda earum, dignissimos sed, vitae a qui natus molestias quaerat
      itaque tenetur, eius velit corrupti! Nemo ducimus enim delectus magni
      reiciendis facere consequatur error harum praesentium adipisci maxime
      cupiditate libero dolore totam nam illum, provident neque amet fugiat!
      Minima quae at magnam alias neque, debitis veritatis adipisci consectetur
      ad atque animi fugit, distinctio modi reprehenderit id facilis praesentium
      laboriosam quisquam, tempore amet quo impedit. Voluptas dignissimos dicta
      neque alias quam aut consectetur facilis modi tempora! Eius temporibus nam
      accusantium non expedita dicta quibusdam perferendis quisquam! Nulla quasi
      nemo fugiat qui nihil saepe dolore facere itaque, inventore non porro
      ipsam est officiis sed dolor? Eum iusto quisquam commodi nulla, accusamus
      voluptate quos. Libero voluptates quam autem qui, dolore illum mollitia
      delectus, sapiente, quasi alias eius? Perferendis ratione sit aliquam
      placeat ipsum, velit sunt maxime ipsam. Laborum dolor culpa at blanditiis
      dolorem doloremque nostrum ex? Culpa nihil, enim similique iste quos quod
      autem tenetur ab reiciendis impedit dolores fugit optio, recusandae,
      dolore amet accusantium! Est rem voluptatem minus? Quo, pariatur porro?
      Dolores ad quasi optio vitae eaque omnis praesentium eius sint doloribus,
      fugit officia quaerat placeat accusantium? Fugiat qui id animi! Nihil quod
      corrupti eos aliquid quae soluta expedita voluptate voluptas ratione,
      adipisci facilis incidunt omnis vero excepturi quas labore corporis sequi
      necessitatibus minus dicta accusantium aperiam cupiditate ea. Aut
      perferendis totam quam iusto, iure, excepturi repudiandae ea quibusdam
      consequatur aliquid illo laudantium voluptatibus, vero obcaecati. Maxime
      molestiae exercitationem asperiores quae perspiciatis ratione optio
      expedita provident praesentium incidunt, laudantium ea, recusandae dolores
      eveniet delectus reiciendis nemo odit, nihil minus consequuntur eaque
      aspernatur cumque nulla ab. Provident nam ab, velit et distinctio
      aspernatur molestiae, unde libero, nulla impedit hic laboriosam molestias
      aperiam voluptatem at? Hic eum iusto, ab eos saepe asperiores,
      exercitationem aliquid voluptates impedit porro ipsum sit vel. Ex, natus.
      Asperiores atque accusantium necessitatibus soluta. Iure, sint
      repellendus! Assumenda odit eveniet, esse ducimus, quibusdam saepe sed
      porro ut molestiae, explicabo harum est tempore aut dolores libero id
      similique? Omnis iste pariatur nihil temporibus saepe, vero, enim ullam
      voluptates dolorem velit, ratione quibusdam numquam sapiente vitae. Itaque
      recusandae quis voluptates. Recusandae ea esse autem adipisci nihil, rerum
      expedita rem laboriosam vero porro doloremque sint aspernatur consectetur
      ipsa quod harum labore amet explicabo voluptatem quisquam deserunt maxime
      sapiente accusantium. Expedita odit sapiente voluptatum nostrum rem
      facilis asperiores, accusantium architecto tempora blanditiis similique,
      aspernatur sit eum laborum commodi nesciunt exercitationem tenetur! Eos et
      neque id. Perspiciatis fugiat distinctio commodi impedit quod similique,
      doloremque assumenda reiciendis, ut aliquid officia magni dolorem omnis
      exercitationem pariatur possimus accusamus at laborum? Necessitatibus quod
      odit pariatur aliquid voluptatem illo ea dolorem quibusdam officia ad
      harum ab reprehenderit tempore ex, commodi praesentium placeat eum atque
      quae et, impedit labore iure quam fugiat? Repellat ratione impedit quaerat
      molestias quibusdam molestiae sint odio rerum exercitationem ipsum nam
      omnis suscipit commodi aliquam ducimus fugiat dolore, eos officia atque
      veritatis vitae. Nostrum similique incidunt quam ex voluptatum vel eius
      autem repellendus itaque tenetur, obcaecati fugiat corporis fugit nisi
      odit laudantium dolorum iste quis necessitatibus labore saepe esse vitae
      sequi! Totam, provident odio sint natus et numquam inventore omnis nemo
      dicta cumque sapiente, assumenda illum perspiciatis dolorem! Fuga nulla
      quis laboriosam tenetur praesentium quasi necessitatibus cumque? Quia
      accusamus sed sit consequatur doloribus voluptas nihil quaerat repudiandae
      cupiditate aliquam, repellat minus et magnam consectetur consequuntur
      maiores at dolorem vel ipsa quidem architecto libero. Dolorum commodi,
      sequi vel magnam aperiam qui, ab laudantium recusandae, numquam eos
      laboriosam ad. Impedit, iste non illum molestiae ipsam maiores repellat
      neque ad totam, cupiditate perferendis cumque modi voluptates soluta error
      doloribus ullam laudantium exercitationem! Quisquam, exercitationem
      accusamus commodi veritatis ullam sunt quaerat sapiente laboriosam
      deleniti iste laborum ab, rerum provident magnam fuga? Inventore laborum
      assumenda sit doloremque, rerum suscipit cumque, voluptates maxime sint
      animi alias magni consectetur beatae numquam labore mollitia magnam
      necessitatibus itaque! Repellendus in culpa distinctio vel eaque maxime,
      illum natus sunt omnis doloribus quaerat enim mollitia modi adipisci est
      expedita eligendi autem aspernatur possimus quas tempora optio. Vero
      quibusdam possimus facilis reiciendis officiis, iusto autem fugit, aut
      velit voluptatum eius ipsum incidunt non commodi eligendi nostrum
      obcaecati necessitatibus porro deleniti dolorem, illum odit. Quae quisquam
      similique esse cum laborum pariatur perferendis aspernatur asperiores,
      modi ad eligendi possimus dolorem adipisci, minus, fugiat quia molestiae?
      Debitis illo, vitae, ex odio cumque dicta non quos ipsa dolores iusto
      voluptas inventore magni vel. Ullam assumenda sint rerum. Qui excepturi
      cupiditate distinctio, facilis rem quam accusantium quibusdam natus
      perspiciatis soluta quos sunt aperiam asperiores tenetur tempore accusamus
      dicta placeat. Pariatur assumenda, unde, voluptatum neque optio aperiam
      nesciunt nulla ipsa cupiditate exercitationem corporis officia aut sit.
      Vero, officia doloribus quasi similique sunt itaque, velit iure magnam
      ullam dolor inventore. Distinctio, eveniet quia? Sit, doloremque nisi
      sapiente numquam accusamus dolor eaque repellendus saepe perspiciatis
      dolore velit illo aut, in obcaecati enim harum omnis nostrum mollitia vel
      dolorem asperiores perferendis quam tempore cumque. Perspiciatis aperiam
      quasi voluptatibus rerum quam sequi modi, nihil laborum optio ad, facere,
      libero dolorum veniam ut tempore doloribus asperiores minus. Voluptatum
      excepturi distinctio animi recusandae. Quisquam optio, quas sint quidem
      fuga quibusdam hic ipsa atque suscipit quaerat aspernatur ipsum quasi,
      iusto sapiente porro nisi ullam eum dolor nobis totam? Et?
    </div>
  );
}

// const Page1Wrapper = withScoll(Page1);
// const Page2Wrapper = withScoll(Page2);

export default function App() {
  return (
    <GuardRouter
      onChange={(prevLocation, location, action, unListen) => {
        if (prevLocation.pathname !== location.pathname) {
          scrollRecover();
        }
      }}
      onBeforeChange={(prev, next, action, commit, unBlock) => {
        commit(true);
      }}
    >
      <div className="link">
        <NavLink to="/page1">page1</NavLink>
        <NavLink to="/page2">page2</NavLink>
      </div>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
    </GuardRouter>
  );
}
