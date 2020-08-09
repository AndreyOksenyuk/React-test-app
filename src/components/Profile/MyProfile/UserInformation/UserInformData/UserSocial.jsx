import React from 'react';

const UserSocial = ({ keyContacts, valueContacts }) => {
   return (
         <p>{keyContacts + ": "}
            {valueContacts
               ? <a href={valueContacts}>{valueContacts}</a>
               : <i>нет данных</i>}
         </p>
   );
}

export default UserSocial;
