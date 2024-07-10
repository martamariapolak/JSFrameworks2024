function AccordionSection({isOpen,title,content}){
  const titleClasses=isOpen?"title active":title;
  const contentClasses=isOpen?"content active":"content";
  const transitionClasses=isOpen?"transition visible":"transition hidden";
    return (
    <>
        <div className={titleClasses}>
  <i className="dropdown icon"></i>
  {title}
</div>
<div className={contentClasses}>
  <p className={transitionClasses}>
    {content}
  </p>
</div>
</>
    );
}
export default AccordionSection;