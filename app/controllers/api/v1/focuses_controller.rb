module Api::V1

class FocusesController < ApplicationController

  def index
    @focuses = Focus.all
    render json: @focuses
  end

  private

  def focus_params
    params.require(:focus).permit(
      :name, :category,
      :level, :experience
    )
  end

end

end

