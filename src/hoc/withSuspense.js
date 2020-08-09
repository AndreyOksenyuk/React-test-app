import React from 'react';
import Preloader from '../components/module/preloader';

export let whitSuspense = (Component) => {
   return (props) => {
      return (
         <React.Suspense fallback={<Preloader />}>
            <Component {...props}/>
         </React.Suspense>
      )
   }
}
