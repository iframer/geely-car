import './UnderHeader.css';

const UnderHeader = ({ onSelectCar }) => {
  return (
    <div className="UnderHeader">
      <ul>
        {/* Вызываем функцию при клике на название машины */}
        <li onClick={() => onSelectCar('coolray')}>COOLRAY</li>
        <li onClick={() => onSelectCar('tugella')}>TUGELLA</li>
        <li onClick={() => onSelectCar('monjaro')}>MONJARO</li>
        <li onClick={() => onSelectCar('emgrand')}>EMGRAND</li>
        <li onClick={() => onSelectCar('atlas')}>ATLAS</li>
        <li onClick={() => onSelectCar('okavango')}>OKAVANGO</li>
      </ul>
      <ul>
        <li>ТРЕЙД-ИН</li>
        <li>ТЕСТ-ДРАЙВ</li>
        <li>КОНТАКТЫ</li>
      </ul>
    </div>
  );
};

export default UnderHeader;
