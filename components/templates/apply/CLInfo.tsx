import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/textarea';
import TwoOptionBox from '@/components/ui/twoOptionbox';
import React, { useEffect, useState } from 'react';

interface CLInfoProps {
    onInfoChange: (info: { session: string, motivation: string, career: string, instrument: string, determination: string}) => void;
    CoverLetterInfo: {
        session: string;
        motivation: string;
        career: string;
        instrument: string;
        determination: string;
    };
}

const CLInfo: React.FC<CLInfoProps> = ({ onInfoChange, CoverLetterInfo }) => {
    const { session, motivation, career, instrument, determination } = CoverLetterInfo;

    const handleSessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInfoChange({ ...CoverLetterInfo, session: event.target.value });
    };

    const handleMotivationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onInfoChange({ ...CoverLetterInfo, motivation: event.target.value });
    };

    const handleCareerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onInfoChange({ ...CoverLetterInfo, career: event.target.value });
    };

    const handleInstrumentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onInfoChange({ ...CoverLetterInfo, instrument: event.target.value });
    };

    const handleDeterminationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onInfoChange({ ...CoverLetterInfo, determination: event.target.value });
    };

    return (
        <div className="flex flex-col py-10 px-4 pad:px-12 bg-gray-5">
            <div className='flex flex-col pad:flex-row gap-1 pad:gap-3 pad:items-end'>
                <p className='text-gray-90 text-[20px] font-light'>지원세션</p>
                <p className='text-gray-40 text-[16px] font-extralight'>지원하고자 하는 세션을 2지망까지 선택해주세요.</p>
            </div>

            <div className='flex flex-col pad:flex-row gap-1 pad:gap-3 pad:items-end mt-12'>
                <p className='text-gray-90 text-[20px] font-light'>깔루아 지원동기</p>
                <p className='text-gray-40 text-[16px] font-extralight'>200자 이내</p>
            </div>
            <Textarea className='mt-4' value={motivation} onChange={handleMotivationChange} placeholder='깔루아 지원 동기에 대해 작성해주세요.'/>

            <div className='flex flex-col pad:flex-row gap-1 pad:gap-3 pad:items-end mt-12'>
                <p className='text-gray-90 text-[20px] font-light'>지원 세션에 대한 경력 및 지원 이유</p>
                <p className='text-gray-40 text-[16px] font-extralight'>200자 이내</p>
            </div>
            <Textarea className='mt-4' value={career} onChange={handleCareerChange} placeholder='지원 세션에 대한 경력 및 지원 이유를 작성해주세요.'/>

            <div className='flex flex-col pad:flex-row gap-1 pad:gap-3 pad:items-end mt-12'>
                <p className='text-gray-90 text-[20px] font-light'>이외에 다룰 줄 아는 악기</p>
                <p className='text-gray-40 text-[16px] font-extralight'>200자 이내</p>
            </div>
            <Textarea className='mt-4' value={instrument} onChange={handleInstrumentChange} placeholder='이외에 다룰 줄 아는 악기에 대해 작성해주세요.'/>

            <div className='flex flex-col pad:flex-row gap-1 pad:gap-3 pad:items-end mt-12'>
                <p className='text-gray-90 text-[20px] font-light'>포부 및 각오</p>
                <p className='text-gray-40 text-[16px] font-extralight'>200자 이내</p>
            </div>
            <Textarea className='mt-4' value={determination} onChange={handleDeterminationChange} placeholder=''/>
        </div>
    );
};

export default CLInfo;
