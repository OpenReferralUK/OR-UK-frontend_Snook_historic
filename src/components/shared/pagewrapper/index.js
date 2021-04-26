import React, { Children } from 'react';


export default PageWrapper = ({children, styles}) => {
    //use to wrap pages
    return (
        <>
            <main className={styles.main} role="content" aria-label="main">
                {children}
            </main>
        </>
    )

}