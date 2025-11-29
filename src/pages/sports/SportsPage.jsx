function SportsPage() {
  return (
    <div style={{ padding: '50px' }}>
      
      {/* 1. 그냥 일반 버튼 */}
      <button style={{ 
        padding: '10px 20px', 
        fontSize: '16px', 
        cursor: 'pointer' 
      }}>
        그냥 버튼
      </button>

      <hr />

      {/* 2. 시각화용 네모 박스 */}
      <div style={{ 
        width: '100px', 
        height: '100px', 
        backgroundColor: 'orange', 
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        네모
      </div>

    </div>
  )
}

export default SportsPage