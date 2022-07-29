import React from 'react';
import './game1.css';
import g1 from "./photos/g1.jpg";
import g2 from "./photos/g2.jpg";
import g3 from "./photos/g3.jpg";
import g4 from "./photos/g4.jpg";
import g5 from "./photos/g5.jpg";

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export const SlideThird = () => {
  return (
    <div className='stolbiki'>
    <MDBRow className='row-cols-1 row-cols-md-5 g-2'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={g1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='MDBCardTitle'>Учет денежных потоков, т.е. финансов</MDBCardTitle>
            <MDBCardText className='MDBCardText'>
            Важно ежедневно вести личный бюджет. Учет бюджета позволяет контролировать движение денежных средств и делать сбережения. Финансовая «подушка» может помочь прожить еще пару месяцев после потери работы
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={g2}
            alt='...'
            position='top'
            style={{height: "137.85px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className='MDBCardTitle'>Привлечение сторонних источников дохода</MDBCardTitle>
            <MDBCardText className='MDBCardText'>
            Наличие нескольких способов заработка помогает дополнительно защитить бюджет. Среди них наиболее распространенным считается получение пассивного дохода на бирже. Однако, из-за высоких рисков этот способ требует тщательного изучения
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={g3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='MDBCardTitle'>Привлечение сторонних компаний</MDBCardTitle>
            <MDBCardText className='MDBCardText'>
            Грамотное управление денежными потоками невозможно без обращения в банк, страховую или брокерскую организацию. Изучение предлагаемых продуктов не займет много времени и не потребует больших вложений, но правильно подобранные инвестиционные продукты помогут сохранить и приумножить капитал, а кредиты - не столкнуться с большими переплатами
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={g4}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='MDBCardTitle'>Смена потребления на управление</MDBCardTitle>
            <MDBCardText className='MDBCardText'>
            Только изменив свое отношение к деньгам, человек способен стать действительно финансово грамотным. Вы должны управлять финансовыми потоками, а не они вами. Отказавшись от потребности потратить все заработанное, вы сможете открыть перспективы роста
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={g5}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='MDBCardTitle'>Надежные инвестиции</MDBCardTitle>
            <MDBCardText className='MDBCardText' >
            Используйте сразу несколько инвестиционных инструментов, чтобы сократить риски. Сравнительный анализ различных инструментов позволяет понять, где деньги будут работать лучше
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}