import React from 'react';
import style from './TestAccData.module.scss'

const TestAccountData = () => {
   return (
      <div className={style.testAccount}>
         <h4>Данные тестового аккаунта:</h4>
         <p><strong>Email: </strong> free@samuraijs.com</p>
         <p><strong>Password: </strong> free</p>
      </div>
   );
}

export default TestAccountData;
