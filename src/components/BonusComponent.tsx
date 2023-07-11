import React from 'react';
import { ReactComponent as Right } from '../assets/right.svg';
import { ReactComponent as Fire } from '../assets/fire.svg';
import { Data } from '../types';
import moment from 'moment';

interface BonusComponentProps {
    bonusInfo?: Data;
}

function BonusComponent({ bonusInfo }: BonusComponentProps) {
    return (
        <div className="bonus">
            <div className="bonus__left__content">
                <p>{ bonusInfo?.currentQuantity } Бонусов</p>
                <div>
                    {`${ moment(bonusInfo?.dateBurning).format('DD.MM') } сгорит`}
                    <Fire />
                    {`${bonusInfo?.forBurningQuantity} бонусов`}
                </div>
            </div>
            <Right />
        </div>
    )
}

export default BonusComponent;
