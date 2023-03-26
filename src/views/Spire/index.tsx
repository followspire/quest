import React from 'react';

import './styles.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SaveLifeLogo from '../../assets/savelife-logo.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SOFLogo from '../../assets/sof-logo.png';

function Spire() {
  return (
    <div className="container">
      <div className="main__wrapper">
        <div className="main">
          <div className="main__part">
            <div className="title">Втрати росії</div>
            <div className="subtitle">Орієнтовна оцінка ЗСУ з 24.02.2022</div>
          </div>
        </div>
        <div className="card card_large">
          <div>
            <div className="card__title">Особовий склад</div>
            <div className="card__amount">
              <span className="card__amount-total">~683.200</span>
              <span className="card__amount-progress"> +2640 </span>
            </div>
            <div className="amount-details">
              <div className="amount-details__item">
                <span>вбито</span>
                <span>~170.550</span>
              </div>
              <div className="amount-details__item">
                <span>поранено</span>
                <span>~511.650</span>
              </div>
              <div className="amount-details__item">
                <span>взято в полон</span>
                <span>~1.000</span>
              </div>
            </div>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="162" height="162" className="circle__svg">
                      <circle cx="81" cy="81" r="76" className="circle__progress circle__progress--path" />
                      <circle cx="81" cy="81" r="76" className="circle__progress circle__progress--fill" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int large">100</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  190.000
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="162" height="162" className="circle__svg">
                      <circle cx="81" cy="81" r="76" className="circle__progress circle__progress--path" />
                      <circle cx="81" cy="81" r="76" className="circle__progress circle__progress--fill progress-76" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int large">75.9</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  900.000
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__container">
        <div className="card">
          <div className="card__title">Бойові броньовані машини</div>
          <div className="card__amount">
            <span className="card__amount-total">6947</span>
            <span className="card__amount-progress"> +15</span>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">100</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  2.900
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-51" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">50.5</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  13.758
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Танки</div>
          <div className="card__amount">
            <span className="card__amount-total">3595</span>
            <span className="card__amount-progress"> +15</span>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">100</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  1.200
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">100</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  3.300
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Артилерія</div>
          <div className="card__amount">
            <span className="card__amount-total">2631</span>
            <span className="card__amount-progress"> +8</span>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">100</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  1.600
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-46" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">46.2</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  5.689
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Літаки</div>
          <div className="card__amount">
            <span className="card__amount-total">305</span>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-92" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">92.4</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  330
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-22" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">22.1</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  1.379
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Гелікоптери</div>
          <div className="card__amount">
            <span className="card__amount-total">291</span>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">100</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  240
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-30" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">30.3</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  961
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Кораблі та катери</div>
          <div className="card__amount">
            <span className="card__amount-total">18</span>
          </div>
          <div className="statistics">
            <div className="statistics__title">У відсотках</div>
            <div className="statistics__blocks">
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-24" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">24</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  75
                  {' '}
                  <br />
                  {' '}
                  призначено для вторгнення
                  {' '}
                </div>
              </div>
              <div className="statistics__item">
                <div className="vue-circular-progress">
                  <div className="circle">
                    <svg width="135" height="135" className="circle__svg">
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--path" />
                      <circle cx="67.5" cy="67.5" r="62.5" className="circle__progress circle__progress--fill progress-4" />
                    </svg>
                    <div className="percent">
                      <div>
                        <span className="percent__int medium">3.5</span>
                      </div>
                      <span className="percent_sign">%</span>
                    </div>
                  </div>
                </div>
                <div className="statistics__description">
                  519
                  {' '}
                  <br />
                  {' '}
                  у збройних силах РФ
                  {' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="support">
        <a className="support__block" href="https://www.russiancrimes.in.ua/" target="_blank" rel="noreferrer">
          <div className="support__img">
            <img src={SOFLogo} alt="sof" />
          </div>
          <div className="support__content">
            <div className="support__title">Військові злочини Росії</div>
            <span className="support__link">www.russiancrimes.in.ua</span>
          </div>
        </a>
        <a className="support__block" href="https://savelife.in.ua/" target="_blank" rel="noreferrer">
          <div className="support__img">
            <picture>
              <source srcSet={SaveLifeLogo} media="(min-width: 575px)" />
              <img src={SaveLifeLogo} alt="logo" />
            </picture>
          </div>
          <div className="support__content">
            <div className="support__title">Допомога армії</div>
            <span className="support__link">www.savelife.in.ua</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(Spire);
