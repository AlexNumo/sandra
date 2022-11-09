import { useState } from 'react';
import {
    TestPosition,
    TestBTN,
    TestModalPosition,
    TestModalPosition2
} from './Test.styled';

const Test = () => {
    const [open, setOpen] = useState(false);

    const TestModalOpen = () => {
        setOpen(true);
    }
    const TestModalClose = () => {
        setOpen(false);
    }
    const TestModal = () => {
        return (
            <>
                <TestModalPosition>
                    <TestModalPosition2>
                        <h2>DA?</h2>
                    </TestModalPosition2>
                </TestModalPosition>
            </>
        )
    }
    return (
        <>
            <TestPosition>
                <TestBTN onClick={TestModalOpen}>Click</TestBTN>
                <TestBTN onClick={TestModalClose}>Close</TestBTN>
                {open && <TestModal/>}
            </TestPosition>
        </>
    )
}

export default Test;