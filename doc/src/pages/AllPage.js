import React from 'react';
import {Link} from 'react-router-dom';


const AllPage = () => {
  return <div className="mlr-20">
    <section>
        <h1 className="title-page">Resume</h1>
    </section>
    <div className="grid grid-cols-3 gap-8">
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Alerts</h2>       
            <div className='flex flex-jc-end'><Link to={`/alerts`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
            <br/>
            alert alert-light <br/>
            alert alert-dark <br/>
            alert alert-error <br/>
            alert alert-warning <br/>
            alert alert-success <br/>
            alert alert-notice <br/>
            alert alert-debug <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Badges</h2>       
            <div className='flex flex-jc-end'><Link to={`/badges`} className="btn btn-notice w-100" >More</Link></div>
          </div>          
          <p>
          <br/>
            badge bg-dark <br/>
            badge bg-error <br/>
            badge bg-warning <br/>
            badge bg-success <br/>
            badge bg-notice <br/>
            badge bg-debug <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-90 grid-card-borders">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Borders</h2>       
            <div className='flex flex-jc-end'><Link to={`/borders`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
            <br/>
            border border-none <br/>
            border border-solid <br/>
            border border-dashed <br/>
            border border-dotted <br/>
            border border-double <br/>
            <br/>
            border rounded-none <br/>
            border rounded-sm <br/>
            border rounded <br/>
            border rounded-md <br/>
            border rounded-lg <br/>
            border rounded-l <br/>
            border rounded-xl <br/>
            <br/>
            border rounded-top-sm <br/>
            border rounded-bottom-sm <br/>
            border rounded-top <br/>
            border rounded-bottom <br/>
            border rounded-top-md <br/>
            border rounded-bottom-md <br/>
            border rounded-top-xl <br/>
            border rounded-bottom-xl <br/>
            <br/>
            border border-red <br/>
            border border-right-red <br/>
            border border-left-red <br/>
            border border-bottom-red <br/>
            border border-top-red <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Buttons</h2>       
            <div className='flex flex-jc-end'><Link to={`/buttons`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            btn btn-light <br/>
            btn btn-dark <br/>
            btn btn-error <br/>
            btn btn-warning <br/>
            btn btn-success <br/>
            btn btn-notice <br/>
            btn btn-debug <br/>
            <br/>
            btn btn-rounded <br/>
            btn btn-outlined <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-90 grid-card-color">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Colors</h2>       
            <div className='flex flex-jc-end'><Link to={`/colors`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            from 100 to 1000 : <br/>
            bg-blue-500 <br/>
            bg-red-500 <br/>
            bg-green-500 <br/>
            bg-orange-500 <br/>
            bg-pink-500 <br/>
            bg-gray-500 <br/>
            bg-yellow-500 <br/>
            bg-purple-500 <br/>
            bg-white-500 <br/>
            bg-brown-500 <br/>
            <br/>
            from 100 to 1000 : <br/>
            txt-blue-500 <br/>
            txt-red-500 <br/>
            txt-green-500 <br/>
            txt-orange-500 <br/>
            txt-pink-500 <br/>
            txt-gray-500 <br/>
            txt-yellow-500 <br/>
            txt-purple-500 <br/>
            txt-white-500 <br/>
            txt-brown-500 <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Cards</h2>       
            <div className='flex flex-jc-end'><Link to={`/cards`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            card <br/>
            card-image <br/>
            card-title <br/>
            card-body <br/>
            card-footer txt-right <br/>
            card w-30 <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-90 grid-card-flexbox">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Flexbox</h2>       
            <div className='flex flex-jc-end'><Link to={`/flexbox`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            flex <br/>
            flex flex-jc-start <br/>
            flex flex-jc-space-around <br/>
            flex flex-jc-center <br/>
            flex flex-jc-space-between flex-ai-center <br/>
            flex flex-jc-end <br/>
            flex flex-jc-space-evenly <br/>
            <br/>
            flex flex-ai-flex-start <br/>
            flex flex-ai-baseline <br/>
            flex flex-ai-center <br/>
            flex flex-ai-flex-end <br/>
            flex flex-ai-stretch <br/>
            <br/>
            flex flex-ac-start <br/>
            flex flex-ac-space-around <br/>
            flex flex-ac-center <br/>
            flex flex-ac-space-between<br/>
            flex flex-ac-end <br/>
            flex flex-ac-space-stretch <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40 grid-card-forms">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Forms</h2>       
            <div className='flex flex-jc-end'><Link to={`/forms`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            form-bordered <br/>
            form-no-bordered <br/>
            form-group <br/>
            form-label <br/>
            form-input <br/>
            form-select <br/>
            form-textarea <br/>
            form-message <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Grid</h2>       
            <div className='flex flex-jc-end'><Link to={`/grid`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            grid <br/>
            from 0 to 10 : <br/>
            grid grid-cols-5 <br/>
            <br/>
            from 1 to 8 : <br/>
            grid grid-gap-5 <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Hero</h2>       
            <div className='flex flex-jc-end'><Link to={`/hero`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            hero <br/>
            hero hero-rounded <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Images</h2>       
            <div className='flex flex-jc-end'><Link to={`/images`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            img-fluid <br/>
            img-thumbnails <br/>
            img-rounded <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Menu</h2>       
            <div className='flex flex-jc-end'><Link to={`/menu`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            menu <br/>
            menu-titre <br/>
            menu-item <br/>
            menu-link <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Opacity</h2>       
            <div className='flex flex-jc-end'><Link to={`/opacity`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
          The value are: opacity-0 to opacity-1 by 5. <br/>
          opacity-25
          </p>
        </div>
      </div>
      <div className="card w-100 h-90 grid-card-pointer">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Pointer</h2>       
            <div className='flex flex-jc-end'><Link to={`/pointer`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
          cursor-pointer <br/>
          cursor-progress <br/>
          cursor-not-allowed <br/>
          cursor-cell <br/>
          cursor-col-resize <br/>
          cursor-crosshair <br/>
          cursor-context-menu <br/>
          cursor-grab <br/>
          cursor-help <br/>
          cursor-zoom-in <br/>
          cursor-zoom-out <br/>
          cursor-move <br/>
          cursor-none <br/>
          cursor-text <br/>
          cursor-vertical-text <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Shadow</h2>       
            <div className='flex flex-jc-end'><Link to={`/shadow`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            shadow <br/>
            shadow-none <br/>
            shadwow-sm <br/>
            shadow-lg <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Spacing</h2>       
            <div className='flex flex-jc-end'><Link to={`/spacing`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            p-? for padding<br/>
            p-20 <br/>
            m-? for marging <br/>
            m-30 <br/>
            possible values : 0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 pixels
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Structure</h2>       
            <div className='flex flex-jc-end'><Link to={`/structure`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            col <br/>
            col col-half <br/>
            col col-tiers <br/>
            col col-two-tiers <br/>
            col col-quarter <br/>
            col col-two-quarter <br/>
            col col-three-quarter
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Tables</h2>       
            <div className='flex flex-jc-end'><Link to={`/tables`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            table <br/>
            table table-hover <br/>
            table table-active <br/>
            table table-bordered <br/>
            table table-sm <br/>
            table table-header-drak <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-90 grid-card-text">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Texts</h2>       
            <div className='flex flex-jc-end'><Link to={`/texts`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            txt-bold <br/>
            txt-italic <br/>
            txt-right <br/>
            txt-left <br/>
            txt-center <br/>
            txt-justify <br/>
            txt-no-underline <br/>
            txt-no-wrap <br/>
            txt-oblique <br/>
            txt-uppercase <br/>
            txt-lowercase <br/>
            txt-capitalize <br/>
            txt-underline <br/>
            txt-dashed <br/>
            txt-dotted <br/>
            txt-double <br/>
            txt-line-through <br/>
            txt-none <br/>
            txt-overline <br/>
            txt-solid <br/>
            txt-wavy <br/>
            <br/>
            txt-small <br/>
            txt-normal <br/>
            txt-large <br/>
            txt-xl <br/>
            txt-line-height-sm <br/>
            txt-line-height <br/>
            txt-line-height-l <br/>
            txt-line-height-xl <br/>
            txt-size
          </p>
        </div>
      </div>
      <div className="card w-100 h-50 grid-card-toast">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Toasts</h2>       
            <div className='flex flex-jc-end'><Link to={`/toasts`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            toast toast-light <br/>
            toast toast-dark <br/>
            toast toast-error <br/>
            toast toast-warning <br/>
            toast toast-success <br/>
            toast toast-notice <br/>
            toast toast-debug <br/>
            <br/>
            toast toast-title <br/>
            toast toast-body <br/>
            toast-container <br/>
            toast-footer <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Blocks</h2>       
            <div className='flex flex-jc-end'><Link to={`/utils`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            fLeft <br/>
            fRight <br/>
            fClear <br/>
            dInline <br/>
            dBlock <br/>
            dNone <br/>
            noOverflow <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Width</h2>       
            <div className='flex flex-jc-end'><Link to={`/utils`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            from 5 to 100 (5 by 5): <br/>
            w-5 <br/>
            w-25 <br/>
            w-75 <br/>
            w-100 <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Height</h2>       
            <div className='flex flex-jc-end'><Link to={`/utils`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            from 30 to 100 (10 by 10): <br/>
            h-30 <br/>
            h-60 <br/>
            h-100 <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Positions</h2>       
            <div className='flex flex-jc-end'><Link to={`/utils`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            relative <br/>
            absolute <br/>
            fixed <br/>
            sticky <br/>
            static <br/>
          </p>
        </div>
      </div>
      <div className="card w-100 h-40">
        <div className="card-body">
          <div className="flex flex-jc-space-between flex-ai-center">    
            <h2 className='title-section txt-blue-400'>Visibility</h2>       
            <div className='flex flex-jc-end'><Link to={`/utils`} className="btn btn-notice w-100" >More</Link></div>
          </div>
          <p>
          <br/>
            hidden <br/>
            hide <br/>
            show <br/>
          </p>
        </div>
      </div>
    </div>
  </div>
}

export default AllPage;
