import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';

import ShareButton from '../ShareButton';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment>
      <Header as="h1" textAlign="center" block>
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block>
      ग्रेड : {grade}
      </Header>
      <Header as="h3" textAlign="center" block>
      कुल प्रश्न : {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block>
      सही उत्तर : {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block>
      अपने इतने अंक प्राप्त किये : {score}%
      </Header>
      <Header as="h3" textAlign="center" block>
      सफल होने के लिए इतने अंक चाहिए थे : 60%
      </Header>
      <Header as="h3" textAlign="center" block>
      अपने इतना समय लिया :{' '}
        {`${Number(hours)} घंटे  ${Number(minutes)} मिनट  ${Number(seconds)} सेकण्ड `}
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button
          primary
          content="यही वाला टेस्ट फिर से लें . . . "
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="नया खेला चालू करो, हम फिर से प्रयास करेंगे "
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
        <ShareButton />
      </div>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired
};

export default Stats;
