import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const ResultPage = props => {
  // TODO: 실제 데이터랑 연동해야 함
  const [data, setData] = useState({
    id: 0,
    name: '베트남',
    action: '입국 제한 조치',
    date: '2020-02-29 03:10pm',
    reference: '외교부',
    body:
      '최근 14일 이내 감염증 발생지역(대구, 경북)에서 입국 또는 동 지역을 경유하여 입국하는 외국인의 경우 임시 입국 중단(2.26 21시 시행)\n\n한국에서 출발․경유하여 입국하는 외국인(대구․경북 이외)에 대해 검역신고서 제출 의무화 및 14일간 자가 격리 및 이상이 있을 경우 보건당국에 신고(2.25.)\n\n한국 대상 15일 무사증 입국 조치 임시 중단(2.29.부터)\n\n공식 목적으로 감염증 발생지역(대구․경북)에서 출발하거나 경유하여 입국하는 외국인의 경우 외국 공관들이 외교부와 협의 필요\n\n최근 14일 이내 중국에서 입국하는 외국인의 경우 입국금지(2.2)',
  });
  useEffect(() => {
    console.log(data.action);
    console.log(props);
  }, []);
  return (
    <>
      <section className="result-card">
        <h3 className="name">{data.name}</h3>
        <p className="action">{data.action}</p>
        <p>
          {data.date}기준, 출처 {data.reference}
        </p>
        <p className="body">{data.body}</p>
      </section>
      <Button variant="dark">다른 국가 확인하기</Button>
    </>
  );
};

export default ResultPage;
