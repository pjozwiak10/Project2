import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import users from '../../images/features/users.svg';
import profits from '../../images/features/profits.svg';
import { Link } from 'react-router-dom';

const descriptionFirst = 'Biuro rachunkowe Szczecin Conte powstało z myślą o małych i średnich przedsiębiorstwach, ich potrzebach oraz problemach pojawiających się w trakcie prowadzonej działalności. Wspieranie i rozwój naszych przedsiębiorców to dla nas priorytet. Zapewniamy kompleksową obsługę w zakresie księgowym, finansowym oraz prawnym. Skontaktuj się z nami i dowiedz się więcej.';

const descriptionSecond = 'Księgowość w biurze rachunkowym Prestige to usługa stworzona z myślą o tych, którzy najbardziej cenią sobie profesjonalną obsługę i wygodę. Zapewniamy indywidualne podejście dla każdego naszego klienta. Oferujemy szeroki zakres usług dla małych jednoosobowych działalności, prowadzimy podatkowe księgi przychodów i rozchodów, ryczałtu ewidencjonowanego, świadczymy także usługi w zakresie prowadzenia pełnej księgowości dla większych przedsiębiorstw. Zapewniamy obsługę kadrowo – płacową, rozliczenia roczne, przygotowujemy też i wysyłamy elektroniczne deklaracje podatkowe i VAT.';


class Features extends Component {
  state = {}

  componentDidMount = () => {
    const config = {
      origin: 'right',
      duration: 2000,
      delay: 150,
      distance: '0px',
      scale: 0,
      easing: 'ease',
    }
    const configBtn = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '1000px',
      scale: 1,
      easing: 'ease',
    }

    ScrollReveal().reveal(this.refs.users1, config);
    ScrollReveal().reveal(this.refs.users2, config);
    ScrollReveal().reveal(this.refs.users3, config);
    ScrollReveal().reveal(this.refs.users4, configBtn);
    ScrollReveal().reveal(this.refs.profits1, config);
    ScrollReveal().reveal(this.refs.profits2, config);
    ScrollReveal().reveal(this.refs.profits3, config);
    ScrollReveal().reveal(this.refs.profits4, configBtn);

  }

  render() {
    return (
      <section className="features">
        <div className="features__feature">
          <img src={users} alt="users" className="features__feature-image" ref='users1' />
          <h1 className="features__feature-header" ref='users2'>Księgowość powierz specjalistom</h1>
          <p className="features__feature-description" ref='users3'>{descriptionFirst}</p>
          <Link to='kontakt' className="features__feature-btn" ref='users4'>&#x2713; Kontakt</Link>
        </div>
        <div className="features__feature features__feature--bgi">
          <img src={profits} alt="profits" className="features__feature-image" ref='profits1' />
          <h1 className="features__feature-header" ref='profits2'>Biuro Rachunkowe Szczecin</h1>
          <p className="features__feature-description" ref='profits3'>{descriptionSecond}</p>
          <Link to='usługi' className="features__feature-btn features__feature-btn--second" ref='profits4'>&#x2713; Oferta</Link>
        </div>
      </section>
    );
  }
}

export default Features;