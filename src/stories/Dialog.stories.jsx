import React, { useState } from 'react';

// import { Dialog } from '@feeng/react-dialog';
import { Dialog } from '../component/Dialog/Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
};

const DialogWithHooks = () => {
  const [isStyledDialogOpen, setIsStyledDialogOpen] = useState(false);
  const [isSimpleDialogOpen, setIsSimpleDialogOpen] = useState(false);
  const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(false);
  const [isCancelButtonDisabled, setIsCancelButtonDisabled] = useState(false);

  const handleStyledDialogOpen = () => {
    setIsStyledDialogOpen(true);
  };

  const handleSimpleDialogOpen = () => {
    setIsSimpleDialogOpen(true);
  };

  const handleConfirmButton = () => {
    document.body.style.background = 'lightblue';
  };

  const handleCancelButton = () => {
    document.body.style.background = 'lightcoral';
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button
          type="button"
          onClick={handleStyledDialogOpen}
        >
          Open styled dialog
        </button>

        <button
          type="button"
          onClick={handleSimpleDialogOpen}
        >
          Open simplest dialog
        </button>
      </div>

      <Dialog
        isDialogOpen={isStyledDialogOpen}
        setIsDialogOpen={setIsStyledDialogOpen}
        // theme="dark"
        title="Hello mate!"
        confirmButtonText="Ok, thanks"
        confirmButtonAction={handleConfirmButton}
        cancelButtonText="Cancel"
        cancelButtonAction={handleCancelButton}
        isConfirmButtonDisabled={isConfirmButtonDisabled}
        isCancelButtonDisabled={isCancelButtonDisabled}
      // additionalClassNames="some-class-name"
      // showCloseButton={false}

      // minWidth="600px"
      // width="1000px"
      // maxWidth="600px"
      // minHeight="600px"
      // height="1000px"
      // maxHeight="800px"
      // padding="var(--test, 0)"
      // fontFamily="serif"
      // surfaceColor="#fff"
      // onSurfaceColor="#141414"
      // border="2px solid red"
      // borderRadius="8px"
      // outline="12px solid green"
      // boxShadow="2px 2px 2px 2px rgba(0,0,0,.25)"
      // titleFontSize="40px"
      // titleFontWeight="100"
      // titleFontStyle="italic"

      // dialogStyles={{padding: '20px', backgroundColor: 'red', top: '-20svh'}}
      // headerStyles={{ backgroundColor: 'violet', padding: '20px' }}
      // bodyStyles={{ backgroundColor: 'lightyellow', color: 'pink', padding: '40px' }}
      // footerStyles={{ backgroundColor: 'violet', padding: '20px' }}
      // footerDirection="column"

      // buttonsAlign="start"
      // buttonsAlign="center"
      // buttonsAlign="end"
      // buttonsAlign="between"
      // buttonsAlign="around"
      // buttonsAlign="evenly"
      // buttonsAlign="stretch"

      // buttonsStyles={{ padding: '10px', transition: 'color 2s, background-color 2s, box-shadow 2s' }}
      // buttonsHoverStyles={{ 'box-shadow': '0 0 4px 2px rgba(0,0,0,.25)' }}
      // buttonsActiveStyles={{ 'box-shadow': '0 0 4px 8px rgba(0,0,0,.25)' }}
      // confirmButtonStyles={{ padding: '40px', color: 'yellow', backgroundColor: 'blue' }}
      // confirmButtonHoverStyles={{ 'color': 'blue', 'background-color': 'lightgreen' }}
      // confirmButtonActiveStyles={{ 'color': 'blue', 'background-color': 'lightblue' }}
      // confirmButtonAriaLabel="Ok"
      // cancelButtonStyles={{ padding: '20px', color: 'blue', backgroundColor: 'yellow' }}
      // cancelButtonHoverStyles={{ 'color': 'blue', 'background-color': 'lightcoral' }}
      // cancelButtonActiveStyles={{ 'color': 'blue', 'background-color': 'lightyellow' }}
      // cancelButtonAriaLabel="Reject"

      // confirmButtonOrder={1}
      // cancelButtonOrder={2}

      // additionalFooterButtons={<AdditionalButtons />}
      // additionalFooterButtons={
      //   <button
      //     onClick={() => {
      //       handleCancelButton();
      //       setIsSimpleDialogOpen(false);
      //     }}
      //   >
      //     External with Cancel
      //   </button>
      // }

      // closeButtonStyles={{ position: 'absolute', top: 0, right: 0, border: '1px solid', color: 'red', backgroundColor: 'lightyellow' }}
      // closeButtonHoverStyles={{ 'color': 'blue', 'background-color': 'lightcoral' }}
      // closeButtonActiveStyles={{ 'color': 'blue', 'background-color': 'lightcoral' }}
      // closeButtonIcon={
      //   <svg width="16" height="16" viewBox="0 0 16 16" fill="pink">
      //     <path d="M7.147 7.91 2.854 3.463l.959-.926 4.277 4.43 4.105-4.105.943.943-4.122 4.121 4.13 4.278-.959.926-4.113-4.26-4.27 4.268-.942-.943L7.147 7.91Z" />
      //   </svg>
      // }
      // closeButtonIcon="Close"
      // closeButtonIcon={
      //   <>
      //     <span style={{ marginRight: '8px' }}>Close</span>
      //     <svg width="16" height="16" viewBox="0 0 16 16" fill="pink">
      //       <path d="M7.147 7.91 2.854 3.463l.959-.926 4.277 4.43 4.105-4.105.943.943-4.122 4.121 4.13 4.278-.959.926-4.113-4.26-4.27 4.268-.942-.943L7.147 7.91Z" />
      //     </svg>
      //   </>
      // }
      // closeButtonIconStyles={{ width: '40px', height: '40px' }}
      // closeButtonAriaLabel="Close me"
      >
        <p>This is your new simple modal window.</p>
        <p style={{ textWrap: 'balance' }}>Now you can use all benefits of the native <code>&lt;dialog /&gt;</code> element!</p>
        <p>
          To open next dialog
          <button
            type="button"
            onClick={handleSimpleDialogOpen}
            style={{ marginLeft: '.5rem' }}
          >
            Click this button
          </button>
        </p>
      </Dialog>

      <Dialog
        isDialogOpen={isSimpleDialogOpen}
        setIsDialogOpen={setIsSimpleDialogOpen}
      >
        <p>Bye React Portal :Ь</p>
      </Dialog>
    </>
  );
};

export const DialogComponent = {
  render: () => <DialogWithHooks />,
};
